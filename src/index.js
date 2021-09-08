import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ViewContextProvider from './Contexts/ViewContextProvider';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ViewContextProvider>
      <App/>
    </ViewContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
