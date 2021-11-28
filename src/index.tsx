import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './css-reset.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
