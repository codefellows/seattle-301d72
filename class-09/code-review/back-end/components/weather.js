'use strict';
const getWeatherFromAPI = require('./getWeatherFromAPI');


function getWeather(request, response) {
  const { latitude, longitude } = request.query;
  // go to the weather API

  getWeatherFromAPI(latitude, longitude, response);
  // get the info
  // return it to the front end
}

module.exports = getWeather;