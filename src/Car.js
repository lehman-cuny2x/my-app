//import logo from './logo.svg';
//import './App.css';
import { Component } from 'react';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello there!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


/*

In JSX the {} are special syntax. They are used to evaluate a JS expression
during the program compilation.

A JavaScript expression can:
1. variable, function, object, or it can any code snippet that evaluates to
a value.


*/


/*
A component returns HTML via the render() function


class App extends Component{

  render(){

    return (
      <div className="App">
        <h1>Lehman College, CUNY. This is TPP Summer 2021</h1>
        <h1>Total amount $ { 2 + 2 }</h1>
      </div>
    )
  }

  return (<div>
            <h1>Hello World!!!!!!!!!</h1>
            <h1>Total amount $ { 2 + 2 }</h1>
            </div>);
}




We can also use function components

A function component also returns HTML.

You can be able to create function components using the keyword function
or using arrow functions.



function Cars(){
  return <h1>This is a Car</h1>;
}

export default Cars;*/

class Car extends Component{
  render(){
    return <h1>My Car is a {this.props.name}</h1>;
  }
}
export default Car;