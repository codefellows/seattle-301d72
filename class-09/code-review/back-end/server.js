'use strict';

// libraries
// allows us to access variables from the .env
require('dotenv').config();
// this library builds our server for us
const express = require('express');
// allows our front-end to access our server
const cors = require('cors');


// initalizes the server
const app = express();
// invites everyone to the party (aka - allows everyone to access our server)
app.use(cors());

const banana = require('./components/banana');
const getWeather = require('./components/weather');

const PORT=process.env.PORT;

// routes
app.get('/bananas', banana.handleBanana);
app.get('/weather', getWeather);

app.listen(PORT, () => console.log(`listening on ${PORT}`))
