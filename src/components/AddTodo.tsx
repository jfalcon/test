import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos';

const AddTodo: React.FC = () => {
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
    <section aria-labelledby="add-todo-heading">
      <h2 id="add-todo-heading" className="visually-hidden">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="New todo text"
        />
        <button
          type="submit"
          className="add-button"
          data-testid="add-todo"
        >
          Add Todo
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
