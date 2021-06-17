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

  constructor(props){
    super(props);

    // state object
    this.state = {
      name:props.name,
      model:"Sahara",
      color: props.color,
      year:1990,
      firstName:"",
      lastName:"",
      email:""
    }


    setInterval(this.changeYear.bind(this) , 4000);
    this.handleFormChanges = this.handleFormChanges.bind(this);
  } // End of constructor


  /* The following method is called when the component has been
  rendered
  */
  componentDidMount(){
    setTimeout(()=>{
      this.setState({color: "pink"});

    }, 2000)
  }

  componentDidUpdate(){
    document.getElementById("idOne").style.backgroundColor = "red";
  }


  /*

  How do we change the state object?
  If we want to change a value of the state object, we have to use
  the this.setState() method


  */

  changeColor = () => {
    this.setState({color: "blue"});
  }

  changeYear = () => {
    let s = this.state.year;
    s = parseInt(s);
    s--;

    this.setState({year: s});
  }


  /*If you use regular functions other than the arrow functions,
  you must use this and bind method to bind the component instance

  */
  handleFormChanges(event){
    // This accesses the name of the input  field
    let nam = event.target.name; 

    //The following accesses the value inside the input field
    let val = event.target.value;
    

    /*
     = Assignment operator
     == this compares values without about their data type 3 == '3', true
     === this compares the values and their data type 3 === '3', false
    */
    /*if(fname === ""){
      alert("You must enter your first name");
    }
    
    
    switch in JS, uses === to compare the cases.
    */

    this.setState({ [nam]:val });
  }

  /* 
  The following is an arrow function
  */
  formSubmitHandler = (event) =>{
    event.preventDefault();// This prevent the form from actual submission

    
    /* We can add a code for submitting our form to the database
    */
   //fetch("url").then.then()

   //let putTheValuesVariableHere = [];
   let values = this.state;
   //console.log("Testing the state");
   alert("We submitted a from with this data" + values.firstName);


   (async () => {
    //console.log(values);
    const rawResponse = await fetch('/formSubmit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();

   /*(async () => {
   fetch('/formSubmit', 
    {
      method: 'POST',
      body: JSON.stringify(values),
      header: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));*/
    
    /**/
    //alert("The form has been submitted" + this.state.firstName);
  } 


  render(){
    return <div>
          <h1 id="idOne">My Car is a {this.state.name}. 
          It was  made in {this.state.year}. 
          It is {this.state.color} in color
          </h1>

          <form onSubmit={this.formSubmitHandler}>
            <h2>Contact Me</h2>
            
            <div>
              <p>First Name:</p>
              <input type="text" 
              value={this.state.firstName} 
              onChange={this.handleFormChanges}
              name="firstName"
              />
            </div>

            <div>
              <p>Last Name:</p>
              <input type="text" 
              value={this.state.lastName} 
              onChange={this.handleFormChanges}
              name="lastName"
              />
            </div> 

            <div>
              <p>Email:</p>
              <input type="text" 
              value={this.state.email} 
              onChange={this.handleFormChanges}
              name="email"
              />
            </div>                 
          
            <input type="submit" />
          </form>

          <button type="button" onMouseOver={this.changeColor}>Change Color</button>

          <button type="button" onClick={this.changeYear}>Change Year</button>



    </div>
    
    
;
  }
}
export default Car;



/* A component is updated anytime there is a change in the component's
state or props.

There has five methods that get called when a component has be updated:
1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

*/

