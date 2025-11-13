import { SET_TODO_TEXT, SET_TODO_ITEM } from './actions.js';

const initialState = {
  todoText: '',
  todos: []
}

export default function todoReducer(state = initialState, action) {
  let newStore;
  switch (action.type) {
    case SET_TODO_TEXT:
      newStore = {...state, todoText: action.payload}
      return newStore;
    case SET_TODO_ITEM:
      newStore = {...state, todos: [...state.todos, action.payload]}
      return newStore;
    default:
      return state;
  }
}
