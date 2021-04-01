'use strict';

const User = require('../Models/User');
// User.collection.drop();

const Cats = {};

Cats.getAllCats = async(request, response) => {
  const name = request.query.name;
  await User.find({name: name}, function (err, items) {
    if (err) return console.error(err);
    // console.log(items, items[0])
    response.status(200).send(items[0].cats);
  })
}

Cats.createACat = async(request, response) => {
  console.log('inside of createACat with request.body', request.body);
  // extract the data from the request object
  // { catName: 'bob', name: 'Brian' }
  const name = request.body.name;
  const cat = { name: request.body.catName }

  // name: 'Brian',
  // cats: [{name: 'Lucy'}, {name: newCat}]

  // add it to the right location
  await User.findOne({ name }, (err, entry) => {
    if(err) return console.error(err);
    entry.cats.push(cat);
    entry.save();
    // send it back to the client
    response.status(200).send(entry.cats);
  })
}

Cats.deleteACat = async(request, response) => {
  const index = parseInt(request.params.index);
  const userName = request.query.name;
  // { index: '5', userName: 'Brian' }
  
  await User.findOne({ name: userName }, (err, entry) => {
    const newCatArray = entry.cats.filter((cat, i) => {
      return i !== index;
    });
    entry.cats = newCatArray;
    entry.save();
    response.status(200).send('success!')
  })
}

Cats.updateCat = async (request, response) => {
  const index = request.params.index;
  const catName = request.body.catName;
  const personName = request.body.name;


  // console.log({index, catName, personName})
  // { index: '1', catName: 'sam', personName: 'Brian' }
  await User.findOne({name:personName}, (err, user) => {
    const cat = { name: catName }
    user.cats.splice(parseInt(index), 1, cat);
    user.save();
    response.status(200).send(user.cats);
  })
}

module.exports = Cats;