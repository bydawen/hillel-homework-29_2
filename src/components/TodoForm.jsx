import React from 'react';

export default function TodoForm({ todoText, handleTodoTextChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" value={todoText} onChange={(e) => handleTodoTextChange(e.target.value)} placeholder="Назва таски" />
        <button type="submit" onClick={handleSubmit} className={`${!todoText ? 'is-disabled' : ''}`}>
          Додати таску
        </button>
      </form>
    </>
  );
};
