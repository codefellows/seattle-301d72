import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      address:'',
      weather:[],
      location: {}
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    try{
      
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.address}&format=json`;
    const location = await axios.get(url);
    const locationInfo = location.data;
    this.setState({ location: locationInfo[0]});

    this.getWeather(locationInfo[0]);

    } catch(err){
      console.error(err);
    }
  }

  getWeather = async (location) => {
    try{
      console.log('inside of getWeather', location);
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, { params: {latitude: location.lat, longitude: location.lon}});

      console.log(weather.data);
      this.setState({ weather: weather.data })

    } catch(err){
      console.log(err);
    }
  }
  // componentDidMount = async () => {
  //   const results = await axios.get(`${process.env.REACT_APP_SERVER}/bananas`);
  //   const bananaResults = results.data;
  // }

  render() {
    return(
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.getLocation}>
        <input onChange={(e)=> this.setState({address: e.target.value})} placeholder='enter your address'></input>
      </form>

      {/* <Weather 
        weather={this.state.weather}
      /> */}
      </>
    )
  }
}

export default App;
