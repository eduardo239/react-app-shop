import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/index.css';
import './css/colors.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyContext } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContext>
        <App />
      </MyContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
