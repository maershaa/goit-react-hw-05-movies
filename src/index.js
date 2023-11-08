import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // npm install react-router-dom

import { App } from 'components/App';
import './index.css';

//npm install axios

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App basename="/goit-react-hw-05-movies" />
    </BrowserRouter>
  </React.StrictMode>
);
