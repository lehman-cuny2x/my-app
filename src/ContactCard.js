//import logo from './logo.svg';
//import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

function ContactCard(props) {
  return (
    <div className="App">
      <h2>Contact Card</h2>
      <ul>
        <li>Contact Name: {props.name}</li>
        <li>Mobile Number: {props.mobileNumber}</li>
        <li>Work Phone: {props.workPhone}</li>
        <li>Email: {props.email}</li>
      </ul>
      
    </div>
  );
}

/* We can use the propTypes to make that valid values are passed to our
props
*/
ContactCard.propTypes = {
  name:PropTypes.string.isRequired,
  mobileNumber:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  workPhone:PropTypes.string,
}

export default ContactCard;