'use strict';
const superagent = require('superagent');

const inMemoryDB = {};

// step 1. check to see if the ingredient is in the DB
// step 2. if it is, send the data from the DB
// step 3. if it isn't, go to the API and get the info as usual
// step 4. put the results in the DB and then send to the front-end

// step 5. make sure data is current


// inMemoryDB = {
//   chicken: [
//     {name: 'chicken and dumplings', src: 'http://;oalkdja;dk', createdAt: }, 
//     {...i}
//   ],
//   broccoli: [
//     {name: 'broccoli and dumblings', src: 'http//:lakdj'},
//     {}
//   ]
// }

function getRecipes(request, response) {
  // get the ingredient from the front end
  const ingredient = request.query.ingredient;

  // if the information is already in the DB, send that information and that information is current
  if(inMemoryDB[ingredient] !== undefined && inMemoryDB[ingredient].createdAt > Date.now() - 300000) {
    console.log('getting info from the database');
    response.status(200).send(inMemoryDB[ingredient]);
  } else {
    // clear the cache: 
    inMemoryDB[ingredient] = undefined;

    console.log('goting to the API for data');
    // go to my food API
    const url = `https://api.edamam.com/search`;
    const query = {
      q:ingredient,
      app_id:process.env.FOOD_APP_ID,
      app_key:process.env.FOOD_APP_KEY
    }
  
    // get recipes based on the ingredient
    superagent  
      .get(url)
      .query(query)
      .then(results => {
        const recipes = results.body.hits;
        const finalRecipes = recipes.map(item => {
          return new Food(item);
        });
        // the brackets label what the variable is
        console.log({finalRecipes});

        // add this information to the database
        inMemoryDB[ingredient] = finalRecipes;

        // send to the front-end
        response.status(200).send(finalRecipes);
      })
      .catch(err => console.error('superagent error', err.url));
    // run those recipes through a constructor
    // return them to the front-end

  }



}

function Food(obj) {
  this.name = obj.recipe.label;
  this.src = obj.recipe.url;
  this.createdAt = Date.now();
}

module.exports = getRecipes;
