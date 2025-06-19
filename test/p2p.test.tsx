import { render, screen } from '@testing-library/react';
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
})
