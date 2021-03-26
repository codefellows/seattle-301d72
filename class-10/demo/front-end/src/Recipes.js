import React from 'react';

class Recipes extends React.Component {
  render() {
    return(
      this.props.recipes.map((recipe, index) => (
        <div key={index}>
          {recipe.name}
          {recipe.src}
        </div>
      ))
    )
  }
}

export default Recipes;