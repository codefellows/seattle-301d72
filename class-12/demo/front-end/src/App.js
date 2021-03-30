import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import Form from './Form';

// GOAL: get a list of cats from the back-end

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cats: [], 
      name: ''
    }
  }

  updateName = (userName) => this.setState({ name:userName });

  getCats = async (e) => {
    e.preventDefault();
    console.log('in get cats', this.state.name);
    try {
      const SERVER = 'http://localhost:3001';
      const cats = await axios.get(`${SERVER}/cats`, { params: {name: this.state.name }});

      console.log(cats.data);

      this.setState({ cats: cats.data })
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return(
      <>
        <Cats
          cats={this.state.cats}
        />
        <Form 
          updateName={this.updateName}
          getCats={this.getCats}
        />
      </>
    )
  }
}

export default App;
