/*************************************************************************************
* WEB322 - 2231 Project
* I declare that this assignment is my own work in accordance with the Seneca Academic
* Policy. No part of this assignment has been copied manually or electronically from
* any other source (including web sites) or distributed to other students.
*
* Student Name  : Shamayel Asim
* Student ID    : 
* Course/Section: WEB322 NCC
*
**************************************************************************************/

// const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var data = require("./rental-db");


app.use(bodyParser.urlencoded({ extended: false }));

all_data = data.all_data();

feature_data = data.getFeaturedRentals();

country_data = data.getRentalsByCityAndProvince("Toronto","Ontario")


console.log(all_data)
console.log(feature_data)
console.log(country_data)

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// Add your routes here
// e.g. app.get() { ... }

//routes

// Routes for the home page
app.get("/", (req, res) => {
    // res.send("home page");
    res.render("home",{feature_data:feature_data});
});

// Routes for the rental page
app.get("/rentals", (req, res) => {
    // res.send("rentals page");
    res.render("rentals",{all_data: all_data, country_data: country_data});
});

// Routes for the singup page
app.get("/sign-up", (req, res) => {
    // res.send("sign-up page");
    res.render("sign_up",{errors:null});
});

// Routes for the login page
app.get("/log-in", (req, res) => {
    // res.send("log-in page");
    res.render("login",{errors:null});
});


//post

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,12}$/;

  let errors = [];

  if (!email) {
    errors.push('Email is required');
  } else if (!emailRegex.test(email)) {
    errors.push('Invalid email address');
  }

  if (!password) {
    errors.push('Password is required');
  } else if (!passwordRegex.test(password)) {
    errors.push('Password must be 8-12 characters and contain at least one lowercase letter, uppercase letter, number and symbol');
  }

  if (errors.length > 0) {
    res.render("login",{errors});
  } 

  // Save user to database and perform other registration logic here
  // ...

  res.redirect("/")
});


//register

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,12}$/;

  let errors = [];

  if (!email) {
    errors.push('Email is required');
  } else if (!emailRegex.test(email)) {
    errors.push('Invalid email address');
  }

  if (!password) {
    errors.push('Password is required');
  } else if (!passwordRegex.test(password)) {
    errors.push('Password must be 8-12 characters and contain at least one lowercase letter, uppercase letter, number and symbol');
  }

  if (errors.length > 0) {
    res.render("sign_up",{errors});
  }

  // Save user to database and perform other registration logic here
  // ...

  res.redirect("/")
});




// *** DO NOT MODIFY THE LINES BELOW ***

// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something broke!")
});







// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
  
// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);