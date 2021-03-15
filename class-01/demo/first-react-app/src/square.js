import React from 'react';
import './square.css';

class Square extends React.Component {
  render() {
    console.log('props of the square:', this.props);
    return(
      <div id="square">
        <h2>{this.props.value}</h2>
      </div>
    )
  }
}

export default Square;
