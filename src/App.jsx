import React from 'react';
import './App.css'

import TodoForm from './components/TodoForm.jsx'
import TodoList from "./components/TodoList.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { SET_TODO_TEXT, SET_TODO_ITEM } from './store/actions.js';

function App() {
  const { todoText, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: todoText,
    };

    dispatch({ type: SET_TODO_ITEM, payload: newTodoItem });
    dispatch({ type: SET_TODO_TEXT, payload: '' });
  }

  const handleTodoTextChange = (text) => {
    dispatch({ type: SET_TODO_TEXT, payload: text });
  }

  return (
    <>
      <h1>
        Homework 29_2
      </h1>

      <div className="card">
        <TodoForm todoText={todoText} handleTodoTextChange={handleTodoTextChange} handleSubmit={handleSubmit} />
      </div>

      <TodoList todos={todos} />

      {todos.length > 0 && (
        <p className="footer">
          Кількість тасок: <b>{todos.length}</b>
        </p>
      )}

    </>
  )
}

export default App
