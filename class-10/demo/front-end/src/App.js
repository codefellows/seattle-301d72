import React from 'react';
import Recipes from './Recipes';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient: '', 
      recipes: []
    }
  }

  getRecipe = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_SERVER}/food`;
    const recipes = await axios.get(url, {params: {ingredient: this.state.ingredient}});
    const recipeArray = recipes.data;
    console.log({recipeArray});
    this.setState({ recipes: recipeArray });
    // make a call to the backend
    // when we get the data back, set the state of recipes
  }

  render() {
    return(
      <>
        <form onSubmit={this.getRecipe}>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ ingredient: e.target.value })}></input>
        </form>
        <Recipes
          recipes={this.state.recipes}
        />
      </>
    )
  }
}

export default App;
