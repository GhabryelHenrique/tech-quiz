import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './assets/styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>
);