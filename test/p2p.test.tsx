import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

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

      expect(screen.getByTestId('add-todo')).toBeInTheDocument();
      expect(screen.getByTestId('todo-list')).toBeInTheDocument();
      expect(screen.getByTestId('filter-buttons')).toBeInTheDocument();
    });
  })

  describe('Count Test', () => {
    it('counts add todo clicks', async () => {
      const { default: App } = await import('../src/App');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const addButton = screen.getByTestId('add-todo');
      const addInput = screen.getByLabelText('New todo text');
      const countMessage = screen.getByTestId('todo-sum-message');

      fireEvent.change(addInput, { target: { value: 'Hello' } });
      fireEvent.click(addButton);

      fireEvent.change(addInput, { target: { value: 'World' } });
      fireEvent.click(addButton);

      fireEvent.change(addInput, { target: { value: '!' } });
      fireEvent.click(addButton);

      // innerText doesn't seem to work with this library
      const count = parseInt((countMessage.innerHTML || '').replace(/[^0-9]/g, ''), 10) || 0;
      expect(count).toStrictEqual(3);
    });
  })

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
