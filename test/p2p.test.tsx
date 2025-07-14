import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from 'react-redux';

import { store } from '@/store';
import { parseData } from '@/utility/data';
import { pricedata, utcTimestamps } from '#/fixtures/priceData';
import { NewYork, UTC } from '@/timezones';
import { SLUG_ABOUT, MS_IN_MIN } from '@/constants';
import { isColorDifferent } from '@/utility/color';

describe('P2P Tests', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.resetModules(); // resets cached module imports between tests
  });

  describe('App Component', () => {
    it('renders without crashing', async () => {
      const { default: App } = await import('@/App');
      const { default: Home } = await import('@/pages/Home');
      const { default: About } = await import('@/pages/About');

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
        expect(screen.getByText('Chart')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
      });
    });

    it('renders all child components', async () => {
      const { default: App } = await import('@/App');
      const { default: Home } = await import('@/pages/Home');
      const { default: About } = await import('@/pages/About');

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
        expect(screen.getByTestId('app')).toBeInTheDocument();
        expect(screen.getByTestId('candlestick')).toBeInTheDocument();
        expect(screen.getByTestId('console')).toBeInTheDocument();
        expect(screen.getByTestId('panel')).toBeInTheDocument();
        expect(screen.getByTestId('theme')).toBeInTheDocument();
      });
    });
  })

  describe('Utilities', () => {
    describe('isColorDifferent', () => {
      it('detects significantly different colors', () => {
        expect(isColorDifferent('#ff0000', '#00ff00')).toBe(true);
        expect(isColorDifferent('rgb(255, 0, 0)', '#00ff00')).toBe(true);
      });

      it('considers close colors as the same within tolerance', () => {
        expect(isColorDifferent('#808080', '#808081')).toBe(false);
        expect(isColorDifferent('rgb(128, 128, 128)', 'rgb(130, 128, 128)')).toBe(false);
      });

      it('detects colors outside the tolerance', () => {
        expect(isColorDifferent('#808080', '#c0c0c0')).toBe(true);
      });
    });

    describe('parseData', () => {
      it('parses New York times correctly', () => {
        // ignore DST for now
        const offset = NewYork.offset * MS_IN_MIN;

        const candles = parseData(pricedata, NewYork).filter((c, x) => {
          return c.time === utcTimestamps[x] - offset;
        });

        expect(candles.length).toStrictEqual(utcTimestamps.length);
      });

      it('parses UTC times correctly', () => {
        const candles = parseData(pricedata, UTC).filter((c, x) => {
          return c.time === utcTimestamps[x];
        });

        expect(candles.length).toStrictEqual(utcTimestamps.length);
      });
    });
  });

  describe('Theme Mode Toggle', () => {
    const originalMatchMedia = window.matchMedia;

    beforeEach(() => {
      // mock client side calls
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
          matches: query === '(prefers-color-scheme: dark)',
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          // Optional: legacy support
          addListener: vi.fn(),
          removeListener: vi.fn(),
          onchange: null,
          media: query,
          dispatchEvent: vi.fn(),
        })),
      });
    });

    afterEach(() => {
      window.matchMedia = originalMatchMedia;
    });

    it('toggles between modes', async () => {
      const { default: App } = await import('@/App');
      const { default: Home } = await import('@/pages/Home');
      const { default: About } = await import('@/pages/About');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'dark');

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
        const themeButton = screen.getByTestId('theme');
        fireEvent.click(themeButton);

        expect(window.localStorage.getItem('theme')).toBe('light');
      });
    });

    it('remembers light theme preference', async () => {
      const { default: App } = await import('@/App');
      const { default: Home } = await import('@/pages/Home');
      const { default: About } = await import('@/pages/About');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'light');

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
        expect(document.documentElement).toHaveAttribute('data-theme', 'light');
      });
    });

    it('remembers dark theme preference', async () => {
      const { default: App } = await import('@/App');
      const { default: Home } = await import('@/pages/Home');
      const { default: About } = await import('@/pages/About');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'dark');

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
        expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
      });
    });
  })
})
