import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/scott-t-portfolio">
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
