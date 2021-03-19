import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:''
    }
  }

  updateCity = (e) => {
    console.log('in upate city', e.target.value)
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
