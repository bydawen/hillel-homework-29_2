import React from 'react';

export default function TodoList({ todos }) {
  return (
    <>
      <ul  className="todo-list">
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
