import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals((vitals) => console.log("Web Vitals --------------->", vitals));
