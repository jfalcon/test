import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, store } from '../src/store';
import type { RootState } from '../src/store';
import { STORAGE_KEY } from '../src/store/todos';

describe('P2P Tests', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.resetModules(); // resets cached module imports between tests
  });

  describe('App Component', () => {
    it('renders without crashing', async () => {
      const { default: App } = await import('../src/App');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    it('renders all child components', async () => {
      const { default: App } = await import('../src/App');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(screen.getByTestId('load-todos')).toBeInTheDocument();
      expect(screen.getByTestId('todo-list')).toBeInTheDocument();
      expect(screen.getByTestId('filter-buttons')).toBeInTheDocument();
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

      const toggleButton = screen.getByTestId('theme-toggle');
      fireEvent.click(toggleButton);

      expect(window.localStorage.getItem('theme')).toBe('light');
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

      expect(document.documentElement).toHaveAttribute('data-theme', 'light');
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

      expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    });
  })
})
