import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { GlobalIconFont } from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalIconFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);