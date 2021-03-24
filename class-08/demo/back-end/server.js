'use strict';

// bring in the express library
const express = require('express');
const app = express();

// lets us get our variables from the .env
require('dotenv').config();

// libraray to allow others to hit our server
const cors = require('cors');
app.use(cors());

// superagent is going to get us data
const superagent = require('superagent');

const PORT = process.env.PORT || 3002;

// proof of life
app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/representatives', getReps);

function getReps(request, response) {
  console.log(request.query)
  // { address: '1600 Pennsylvania ave Washington DC ' }
  const address = request.query.address;
  const url = 'https://www.googleapis.com/civicinfo/v2/representatives';
  const query = {
    address: address,
    key: process.env.GOOGLE_KEY
  }

  superagent
    .get(url)
    .query(query)
    .then(superagentResults => {
      // the thing we care about with superagent is the results.body
      // this is where I would run the data through a constructor function, if I wanted to shape the data
      const repArray = superagentResults.body.map(agent => {
        new Representatives(agent);
      })

      response.status(200).send(repArray);
    })
  // go to Google Civic API
  // get the reps and send them back to our front end
}

function Representatives(obj) {
  this.name = obj.name
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));