import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
      searchQuery: '',
      imgSrc: '',
      displayResults: false
    }
    // console.log('constructor');
  }

  getLocationInfo = async(e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;
    this.setState({ 
      location: locationArray[0], 
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13` 
    });
  }


  render() {
    console.log('state', this.state)
    return(
      <>
        <form onSubmit={this.getLocationInfo} >
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })}  placeholder="city"/>
          <button type="submit">explore!</button>
        </form>
        <h1>Welcome</h1>

        {this.state.displayResults &&
          <>
            <h2>{this.state.location.display_name}</h2>
            <img src={this.state.imgSrc} />
          </>
        }
      </>
    )
  }
}

export default App;
