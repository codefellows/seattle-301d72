'use strict';

// bring in the express library
const express = require('express');
const app = express();

// lets us get our variables from the .env
require('dotenv').config();

// libraray to allow others to hit our server
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3002;

// proof of life
app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/representatives', getReps);

function getReps(request, response) {
  console.log(request.query)
  // go to Google Civic API
  // get the reps and send them back to our front end
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));