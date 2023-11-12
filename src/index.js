import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // npm install react-router-dom (предоставляет маршрутизацию для React-приложений)

import { App } from 'components/App';
import './index.css';

//npm install axios

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
    React.StrictMode - инструмент для поиска проблем в приложении, связанных с производительностью и потенциальными ошибками.
    Он активирует дополнительные проверки и предупреждения для компонентов в дереве.
    Это помогает выявить и исправить проблемы до выкладывания приложения в продакшн.
       */}
    <BrowserRouter basename="/goit-react-hw-05-movies">
      {/* 
    Оборачиваем приложение в <BrowserRouter> с указанием базового пути "/goit-react-hw-05-movies".
    Это необходимо для корректной работы маршрутизации внутри приложения.
      */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
