'use strict';

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: {type: String}
});

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cats: [catSchema]
});

const User = mongoose.model('CatParent', userSchema);

module.exports = User;
