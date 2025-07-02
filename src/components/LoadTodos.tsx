import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos';

const LoadTodos: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <section aria-labelledby="load-todo-heading">
      <h2 id="load-todo-heading" className="visually-hidden">Load Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="New todo text"
        />
        <button
          type="submit"
          className="load-button"
          data-testid="load-todos"
        >
          Load Todos
        </button>
      </form>
    </section>
  );
};

export default LoadTodos;
