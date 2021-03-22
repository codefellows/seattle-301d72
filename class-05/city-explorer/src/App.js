import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:''
    }
  }

  updateCity = (e) => {
    this.setState({ city: e.target.value})
  }

  render() {
    return(
      <>
        <Header />
        <Main 
          updateCity={this.updateCity}
        />
        <Footer />
      </>
    )
  }
}

export default App;
