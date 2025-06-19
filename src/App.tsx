import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main className="todo-app">
        <header className="app-header">
          <h1>Todo List</h1>
          <ThemeToggle />
        </header>
        <AddTodo />
        <FilterButtons />
        <TodoList />
      </main>
    </Provider>
  );
};

export default App;
