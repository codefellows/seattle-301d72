'use strict';

// bring in the express libraray
// don't forget to do an npm install express
const express = require('express');

//allows us to access our env variables
require('dotenv').config();

//allow our front-end to access our server
const cors = require('cors');

// initalizing the express library so I can use it
const app = express();

//this allows anyone to access our server - aka - the worlds worst body guard
app.use(cors());

const PORT = process.env.PORT || 3000;

const myShoppingList = ['coffee', 'eggs', 'facial mask', 'aisan shrimp', 'energy drink', 'deordant'];
 
app.get('/', function (request, response) {
  response.send('Hello World')
});

app.get('/bananas', (request, response) => {
  response.send('banans are great!');
});

app.get('/shopping', (request, response) => {
  response.send(myShoppingList);
})
 

// turn on the server
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// three ways to do it:
// 1. node server.js
// 2. npm start
// 3. nodemon - this is going to check for changes and update