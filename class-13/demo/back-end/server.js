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

// middleware that is like a really nice train robber who stops our request object to see if we have a request.body. If we do, he waves a magic wand so that we can read what is in the request.body
app.use(express.json());

const PORT = process.env.PORT || 3002;

// const brian = new User({
//   name: 'Brian',
//   cats: [{name: 'Lucy'}]
// });
// brian.save();
// console.log({brian})

// const simone = new User({
//   name: 'Simone',
//   cats: [{name: 'Luna'}, {name: 'Evie'}]
// });
// simone.save();
// console.log({simone})

// const audrey = new User({
//   name: 'Audrey',
//   cats: [{name: 'Karl'}, {name: 'Ronald'}]
// });
// audrey.save();

app.get('/cats', getAllCats);
app.post('/cats', createACat);
app.delete('/cats/:index', deleteACat);

async function getAllCats(request, response) {
  const name = request.query.name;
  console.log({name})
  await User.find({name: name}, function (err, items) {
    if (err) return console.error(err);
    // console.log(items, items[0])
    response.status(200).send(items[0].cats);
  })
}

function createACat(request, response) {
  console.log('inside of createACat with request.body', request.body);
  // extract the data from the request object
  // { catName: 'bob', name: 'Brian' }
  const name = request.body.name;
  const cat = { name: request.body.catName }

  // name: 'Brian',
  // cats: [{name: 'Lucy'}, {name: newCat}]

  // add it to the right location
  User.findOne({ name }, (err, entry) => {
    if(err) return console.error(err);
    entry.cats.push(cat);
    entry.save();
    // send it back to the client
    response.status(200).send(entry.cats);
  })
}

function deleteACat(request, response) {
  const index = request.params.index;
  const userName = request.query.name;
  // { index: '5', userName: 'Brian' }
  
  User.findOne({ name: userName }, (err, entry) => {
    const newCatArray = entry.cats.filter((cat, i) => {
      return i !== index;
    });
    entry.cats = newCatArray;
    entry.save();
    response.status(200).send('success!')
  })

}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
