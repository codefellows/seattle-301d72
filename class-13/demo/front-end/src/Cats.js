import React from 'react';

class Cats extends React.Component {
  render() {
    return(
      this.props.cats.map((cat, i) => (
        <div key={i}>
          {cat.name}
          <button onClick={() => this.props.deleteItem(i)}>delete</button>
        </div>
      ))
    )
  }
}

export default Cats;