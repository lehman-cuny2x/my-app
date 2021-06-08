import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
// import ComponentName from FileName
import Cars from './Car';
import reportWebVitals from './reportWebVitals';
const name1 = "Jeep";
const color1 = "yellow"
ReactDOM.render(
  //
  <React.StrictMode>
    <Cars name={name1} color={color1} />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();