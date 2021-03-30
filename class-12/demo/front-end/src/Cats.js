import React from 'react';

class Cats extends React.Component {
  render() {
    return(
      this.props.cats.map((cat, i) => (
        <div key={i}>
          {cat.name}
        </div>
      ))
    )
  }
}

export default Cats;