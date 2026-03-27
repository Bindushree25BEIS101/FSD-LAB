import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This finds the <div id="root"></div> in your index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictModdr>
    <App />
  </React.StrictModdr>
)