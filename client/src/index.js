import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware } from 'redux';
import {createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
