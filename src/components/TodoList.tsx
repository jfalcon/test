import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'ACTIVE') return !todo.completed;
    if (filter === 'COMPLETED') return todo.completed;
    return true;
  });

  return (
    <section aria-labelledby="todo-list-heading">
      <h2 id="todo-list-heading" className="visually-hidden">Todo Items</h2>
      {filteredTodos.length === 0 ? (
        <p className="no-todos">No todos found</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TodoList;
