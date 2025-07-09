import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, store } from '../src/store';
import type { RootState } from '../src/store';
import { STORAGE_KEY } from '../src/store/todos';
import { isColorDifferent } from '../src/utility/color';

describe('P2P Tests', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.resetModules(); // resets cached module imports between tests
  });

  beforeEach(() => {
    // vi.mock('chart.js', () => {
    //   return {
    //     Chart: class {
    //       static register = vi.fn();
    //     },
    //     TimeScale: class {},
    //     LinearScale: class {},
    //     Tooltip: class {},
    //     Legend: class {},
    //     registerables: [],
    //     defaults: {},
    //   };
    // });

    // vi.mock('react-chartjs-2', () => ({
    //   Chart: () => <div>Mock Chart</div>,
    // }));

    // vi.mock('chartjs-chart-financial', () => ({
    //   CandlestickController: class {},
    //   CandlestickElement: class {},
    // }));
  });

  describe('App Component', () => {
    it('renders without crashing', async () => {
      const { default: App } = await import('../src/App');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByText('Chart')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
      });
    });

    it('renders all child components', async () => {
      const { default: App } = await import('../src/App');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('app')).toBeInTheDocument();
        expect(screen.getByTestId('candlestick')).toBeInTheDocument();
        expect(screen.getByTestId('console')).toBeInTheDocument();
        expect(screen.getByTestId('theme')).toBeInTheDocument();
      });
    });
  })

  describe('Local Storage', () => {
    beforeEach(() => localStorage.clear());

    it("loads todos from localStorage", () => {
      const fakeState: RootState = {
        todos: {
          todos: [{
            id: 0,
            text: 'task 1',
            completed: false,
            count: 0,
          }, {
            id: 1,
            text: 'task 2',
            completed: false,
            count: 0,
          }],
          filter: 'ALL',
        }
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeState));

      // since this mocked we don't need to map like we do with production
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: RootState = stored ? JSON.parse(stored) : undefined;

      const store = setupStore(parsed);

      const state = store.getState();
      expect(state.todos.todos).toStrictEqual(fakeState.todos.todos);
    });

    it("safely initializes todos when localStorage is empty", () => {
      const store = setupStore(undefined);
      const state = store.getState();

      expect(state.todos.todos).toEqual([]);
    });
  });

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
      const { default: App } = await import('../src/App');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'dark');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const themeButton = screen.getByTestId('theme');
      fireEvent.click(themeButton);

      await waitFor(() => {
        expect(window.localStorage.getItem('theme')).toBe('light');
      });
    });

    it('remembers light theme preference', async () => {
      const { default: App } = await import('../src/App');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'light');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-theme', 'light');
      });
    });

    it('remembers dark theme preference', async () => {
      const { default: App } = await import('../src/App');

      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'dark');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
      });
    });
  })
})
