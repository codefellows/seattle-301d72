import React from 'react';

class Cats extends React.Component {
  render() {
    return(
      this.props.cats.map((cat, i) => (
        <div key={i}>
          {cat.name}
          <button onClick={() => this.props.deleteItem(i)}>delete</button>
          <button onClick={() => this.props.displayUpdateForm(i)}>update</button>
        </div>
      ))
    )
  }
}

export default Cats;