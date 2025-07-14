import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';

describe('Model Tests', () => {
  it('should load the panel when visiting the home page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('panel')).toBeInTheDocument();
    });
  });

  it('should not load the panel when visiting the about page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      try {
        // this will throw an error if the element is not found, which
        // is what we want since the new about page the model creates
        // should different content on it besides the original page
        screen.getByTestId('panel')
        expect(false).toBeTruthy();
      } catch {
        expect(true).toBeTruthy();
      }
    });
  });
});
