'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const Cats = require('./modules/cats');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to the database!');
});

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/cats', Cats.getAllCats);
app.post('/cats', Cats.createACat);
app.delete('/cats/:index', Cats.deleteACat);
app.put('/cats/:index', Cats.updateCat);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
