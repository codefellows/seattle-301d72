import React from 'react';
import Board from './board';

class App extends React.Component {
  render() {
    return(
      <div id="app">
        <h1>Hello from App!</h1>
        <Board />
      </div>
    )
  }
}

export default App;
