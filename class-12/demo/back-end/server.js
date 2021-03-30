'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to the database!');
});

// const kittySchema = new mongoose.Schema({
//   name: String
// });

// 'Cat' is what I am going to call my model
// 'Kitten' is the name of the collection that I'm going to create in Mongo
// 'kittySchema' is the shape of the data that I am going to fill my collection with
// const Cat = mongoose.model('Kitten', kittySchema);

// // this makes a new item
// const silence = new Cat({ name: 'Silence' });
// // this saves that item into the database
// silence.save();


// const garfield = new Cat({ name: 'Garfield' });
// garfield.save();

// // gets all the cats out of the database
// Cat.find(function (err, items) {
//   if (err) return console.error(err);
//   console.log(items);
// })

const User = require('./Models/User');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

const brian = new User({
  name: 'Brian',
  cats: [{name: 'Lucy'}]
});
brian.save();

const simone = new User({
  name: 'Simone',
  cats: [{name: 'Luna'}, {name: 'Evie'}]
});
simone.save();
console.log({simone})

const audrey = new User({
  name: 'Audrey',
  cats: [{name: 'Karl'}, {name: 'Ronald'}]
});
audrey.save();

app.get('/cats', getAllCats);

async function getAllCats(request, response) {
  const name = request.query.name;
  console.log({name})
  await User.find({name: name}, function (err, items) {
    if (err) return console.error(err);
    console.log(items, items[0])
    response.status(200).send(items[0].cats);
  })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
