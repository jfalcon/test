import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todos';
import type { Todo } from '../store/todos';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        id={`todo-${todo.id}`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={todo.completed ? 'completed' : ''}
        data-testid="todo-text"
      >
        {todo.text}
      </label>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="delete-button"
        aria-label={`Delete todo: ${todo.text}`}
        data-testid="delete-button"
      >
        ×
      </button>
    </li>
  );
};

export default TodoItem;
