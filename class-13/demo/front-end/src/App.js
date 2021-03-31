import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import Form from './Form';
import AddACat from './AddACat';

// GOAL: get a list of cats from the back-end

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cats: [], 
      name: '',
      catName: ''
    }
  }

  updateName = (userName) => this.setState({ name:userName });
  updateCat = (catName) => this.setState({ catName });

  deleteItem = async(index) => {
    // use axios to call our API to delete the cat at the index specified
    const SERVER = 'http://localhost:3001';
    const newCats = await axios.delete(`${SERVER}/cats/${index}`, {params: {name: this.state.name}});
    console.log(newCats.data)
    

    // update our cats state with the array of cats that are NOT deleted
    const newCatArray = this.state.cats.filter((cat, i) => {
      return index !== i;
    });
    this.setState({ cats: newCatArray });
  }

  createACat = async (e) => {
    // prevent the default
    e.preventDefault();
    // do a .post to my server with the cat name, and the user name
    const SERVER = 'http://localhost:3001';
    const cats = await axios.post(`${SERVER}/cats`, {catName: this.state.catName, name: this.state.name});
    this.setState({ cats: cats.data });
  }

  getCats = async (e) => {
    e.preventDefault();
    console.log('in get cats', this.state.name);
    try {
      const SERVER = 'http://localhost:3001';
      const cats = await axios.get(`${SERVER}/cats`, { params: {name: this.state.name }});

      // this should be the array of cats including the new cat
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
          deleteItem={this.deleteItem}
        />
        <Form 
          updateName={this.updateName}
          getCats={this.getCats}
        />
        <AddACat
          updateCat={this.updateCat}
          createACat={this.createACat}
        />
      </>
    )
  }
}

export default App;
