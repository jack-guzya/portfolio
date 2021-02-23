import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './App';
import { WithWindowLoader } from './hoc/With-Window-loader';
import reportWebVitals from './config/reportWebVitals';

const AppWithLoader = WithWindowLoader(App);

ReactDOM.render(
  <React.StrictMode>
    <AppWithLoader />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
