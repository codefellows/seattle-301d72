import React from 'react';
import Square from './square.js';

class Board extends React.Component {
  render() {
    return(
      <>
        <h2>This is our board!</h2>
        <Square value={1} />
        <Square value={2}/>
        <Square value={3}/>
        <Square value={4}/>
        <Square value={5}/>
        <Square value={6}/>
        <Square value={7}/>
        <Square value={8}/>
        <Square value={9} banana={'bunches'} />
      </>
    )
  }
}

export default Board;