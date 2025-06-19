import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import '@testing-library/jest-dom';

// mock child components to isolate App tests
vi.mock('./components/AddTodo', () => ({
  default: () => <div data-testid="add-todo">AddTodo</div>,
}));

vi.mock('./components/TodoList', () => ({
  default: () => <div data-testid="todo-list">TodoList</div>,
}));

vi.mock('./components/FilterButtons', () => ({
  default: () => <div data-testid="filter-buttons">FilterButtons</div>,
}));

describe('App Component', () => {
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
