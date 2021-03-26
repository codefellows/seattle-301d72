'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const getRecipes = require('./modules/recipes');

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/food', getRecipes);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
