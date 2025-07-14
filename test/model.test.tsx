import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/store';

import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { SLUG_ABOUT } from '@/constants';

describe('Model Tests', () => {
  it('should load the home page panel when visiting the home route', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path={SLUG_ABOUT} element={<About />} />
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

  it('should load the about page when visiting the about route', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path={SLUG_ABOUT} element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const about = screen.getByTestId('about');
      expect((about.innerHTML || '').trim().length > 0).toBeTruthy();
    });
  });
});
