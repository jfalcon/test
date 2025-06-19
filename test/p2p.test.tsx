import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('P2P Tests', () => {
  describe('App Component', () => {
    // mock child components to isolate App tests
    vi.mock('../src/components/AddTodo', () => ({
      default: () => <div data-testid="add-todo">AddTodo</div>,
    }));

    vi.mock('../src/components/TodoList', () => ({
      default: () => <div data-testid="todo-list">TodoList</div>,
    }));

    vi.mock('../src/components/FilterButtons', () => ({
      default: () => <div data-testid="filter-buttons">FilterButtons</div>,
    }));

    vi.mock('../src/components/ThemeToggle', () => ({
      default: ({ onClick }: { onClick: () => void }) => (
        <button onClick={onClick} data-testid="theme-toggle">Toggle Theme</button>
      )
    }));

    it('renders without crashing', () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    it('renders all child components', () => {
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

  describe('Toggle Mode', () => {
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
      vi.restoreAllMocks();
      window.matchMedia = originalMatchMedia;
    });

    it('toggles between modes', () => {
      // set dark mode in localStorage
      window.localStorage.setItem('theme', 'dark');

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

        // const toggleButton = screen.getByCl
      const toggleButton = screen.getByTestId('theme-toggle');
      fireEvent.click(toggleButton);

      expect(window.localStorage.getItem('theme')).toBe('light');
    });

    it('remembers user theme preference', () => {
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
