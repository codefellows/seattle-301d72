import React from 'react';
import Parent from './parent';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <h1>State and Props</h1>
        <Parent />
      </div>
    )
  }
}

export default App;
