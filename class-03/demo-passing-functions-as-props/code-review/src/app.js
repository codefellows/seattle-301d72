import React from 'react';
import Header from './header';
import Parent from './parent';

class App extends React.Component {
  render() {
    return(
      <>
        <Header title={'Billy is a teenager'} />
        <Parent />
      </>
    )
  }
}

export default App;
