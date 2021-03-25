'use strict';

const Person = function (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() { return this.name }

let person = new Person('Jacob H', 31);

// 1. remove repition
// 2. make code smaller - aka ternarys
function sayName(person) {
  let name = person.name;
  return person.age >= 50 ? name.toUpperCase() : name.toLowerCase();

  // if(person.age >= 50){
  //   return name.toUpperCase();
  // } else {
  //   return name.toLowerCase();
  // }
}

// return condition1 ? value1
// : condition2 ? value2
// : condition3 ? value3
// : value4;

// function getWeather () {
//   superagent.get(url)
//     .then(results => {
//       const weatherArray = results.body.map(day => new Weather(day));
//     })
// }