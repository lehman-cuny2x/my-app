import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
// import ComponentName from FileName
import Cars from './Car';
//import ContactCard from './ContactCard';
import reportWebVitals from './reportWebVitals';
const name1 = "Jeep";
const color1 = "yellow";
const phone = "123-300-7181";
const email = "johndoe@gmail.com";

const name2 = "Totoya";
const phone2 = "123-401-2345";
const email2 = "jk@gmail.com";

const name3 = "BMW";
const phone3 = "222-323-1001";
const email3 = "bmw@gmail.com";
const work3 = "000-000-0000";
/*
ReactDOM.render(
  //
  <React.StrictMode>
    <ContactCard name={name1} mobileNumber={phone} email={email} />
    <ContactCard name={name2} mobileNumber={phone2} email={email2} />
    <ContactCard name={name1} mobileNumber={phone3} email={email3} workPhone={work3} />
  </React.StrictMode>,
  document.getElementById('root')
);*/


ReactDOM.render(

  <React.StrictMode>
    <Cars name={name1} />
  </React.StrictMode>,
  document.getElementById('root')
);



/* Activity: 
Research ways of iterating through iterable object to update components
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();