import { StrictMode } from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/store';

import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { SLUG_ABOUT } from '@/constants';

describe('Model Tests', () => {
  it('should load the candlestick data from state', async () => {
    render(
      <StrictMode>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path={SLUG_ABOUT} element={<About />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </StrictMode>
    );

    await waitFor(() => {
      const candleData = screen.getByTestId('candle-length');
      const candleCount = parseInt(candleData?.getAttribute('value') ?? '', 10) || 0;

      expect(candleCount).not.toStrictEqual(0);
    });
  });
});
