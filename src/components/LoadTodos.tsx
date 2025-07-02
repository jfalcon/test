import React from 'react';

const LoadTodos: React.FC = () => {
  return (
    <section aria-labelledby="load-todo-heading">
      <h2 id="load-todo-heading" className="visually-hidden">Load Todos</h2>
      <button
        type="submit"
        className="load-button"
        data-testid="load-todos"
      >
        Load Todos
      </button>
    </section>
  );
};

export default LoadTodos;
