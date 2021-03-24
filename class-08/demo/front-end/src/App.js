import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      representatives:[],
      address: ''
    }
  }

  getReps = (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    axios.get(`${SERVER}/representatives`, { params: {address: this.state.address}})
      .then(representatives => {
        console.log(representatives.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    return(
      <form onSubmit={this.getReps}>
        <input onChange={(e)=> this.setState({address: e.target.value})} placeholder="address"></input>
      </form>
    )
  }
}

export default App;
