import React from 'react';
import Location from './fake-data/location.json';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cityEntered: false
    }
  }

  updateCityEntered = (e) => {
    e.preventDefault();
    this.setState({ cityEntered: true });
  }

  render() {
    console.log('state', this.state)
    return(
      <>
        <form onSubmit={this.updateCityEntered}>
          <input onChange={(e) => this.props.updateCity(e)} placeholder="enter a city"/>
        </form>

        {
          this.state.cityEntered ? 
          <p>Welcome to {Location.search_query}</p>
          :
          ''
        }
      </>
    )
  }
}

export default Main;