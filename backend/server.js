let express = require('express');
//const { Sequelize } = require('sequelize');
//let bodyParser = require('body-parser');
//let Sequelize = require('sequelize');
let {Sequelize} = require('sequelize');
let app = express();

// An instance of the of Sequelize
//let sequelize = new Sequelize('postgres://postgres:Password@locahost/postgres');
var sequelize = new Sequelize('postgres://postgres:Password@localhost/postgres');

// parse the application
//app.use(bodyParser.urlencoded({extended:false}));

//app.use(bodyParser.json({type: 'application/*+json'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/formSubmit', function(request, response){

    // The form will be handled here.

    /* This where will extract the data that was submitted from
    the form. Next, we will submit this data to database table 
    for storage
    */
   //console.log(request.body);

   // Extracting the information fro the form
   let firstName = request.body.firstName;
   let lastName = request.body.lastName;
   let email = request.body.email;
   let year = request.body.year;

   /*
   Now let us define a model
   */

   let User = sequelize.define('User',{
       firstname: Sequelize.STRING,
       lastname: Sequelize.STRING,
       email: Sequelize.STRING,
       year: Sequelize.INTEGER
   });


   User.sync().then(function(){
       //This would be ready to be used.
   });

  /* You can be able to check for errors before adding information.



  */

  User.findOne({
      where:{
          email: email
      }
  }).then(function(user){
      //console.log(user);
      if(!user){
          console.log("false");

          /*Add this user that is not already in the database table*/
          User.create({
            firstname: firstName,
            lastname: lastName,
            email: email,
            year: year
           });

      }else{
          console.log("user");
          //Notify the use that this user already exists in the table.
      }
  });

   /*;*/

   /*You want to check to make sure that the information is database table
   or you can verify that the informat was successfuly submitted to the 
   database table. Once that has occurred, you want to send a confirmation
   to the user that the information, was successfully added. If there 
   was a failure in adding the information, you also want to notify your 
   users.

   */
   

   //console.log(firstName);
   //console.log(request);
   //console.log("We are getting information from the front end");

    response.send("The form has been received");

});

console.log("Test");


app.listen(3001);