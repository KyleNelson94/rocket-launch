import * as React from 'react';
import ReactDOM from 'react-dom';
import '@assets/styles/index.css';
import App from '@components/App';
import '@assets/styles/normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import defaultTheme from '@utils/defaultTheme';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals((vitals) => console.log("Web Vitals --------------->", vitals));