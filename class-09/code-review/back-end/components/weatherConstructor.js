'use strict';

function Weather(obj){
  this.description =  `${obj.high_temp || 'no temp available'} with ${obj.weather.description.toLowerCase()}`;
  this.date = obj.valid_date;
}

module.exports = Weather;