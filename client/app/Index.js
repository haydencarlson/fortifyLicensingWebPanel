import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import App from './App.js';
import reducers from './reducers/index.js';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");
const createStoreWithMiddleware = applyMiddleware(socketIoMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
