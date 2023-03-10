import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App saludo="Learn React With Platzi">
      <h3>HOLI</h3>
    </App>
  </React.StrictMode>
);
