import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';

import todoReducer from './store/todoReducer.js';

const store = createStore(todoReducer, composeWithDevTools());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
