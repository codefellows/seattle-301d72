import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import Form from './Form';
import AddACat from './AddACat';
import UpdateForm from './UpdateForm';

// GOAL: get a list of cats from the back-end

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cats: [], 
      name: '',
      catName: '',
      displayUpdateForm: false,
      chosenCat: {},
      indexOfChosenCat: -1
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

  displayUpdateForm = (index) => {
    // use the index to find the cat that I want to update
    const chosenCat = this.state.cats[index];
    this.setState({ chosenCat, indexOfChosenCat: index });

    // display an update form to collect information about how to update this animal
    this.setState({ displayUpdateForm: true });
  }
  
  replaceACat = async(e) => {
    e.preventDefault()
    const SERVER = 'http://localhost:3001';
    // update that cat in the front-end => how do we do this? 
    const cat = { name: this.state.catName }
    this.state.cats.splice(this.state.indexOfChosenCat, 1, cat );

    // update the cat in the back-end
    const updatedCatsArray = await axios.put(`${SERVER}/cats/${this.state.indexOfChosenCat}`, {name: this.state.name, catName: this.state.catName});

    // assume that my backend is going to send me an array of all the cats including the updated cat
    this.setState({ cats: updatedCatsArray.data });
  }

  render() {
    return(
      <>
        <Cats
          cats={this.state.cats}
          deleteItem={this.deleteItem}
          displayUpdateForm={this.displayUpdateForm}
        />
        <Form 
          updateName={this.updateName}
          getCats={this.getCats}
        />
        <AddACat
          updateCat={this.updateCat}
          createACat={this.createACat}
        />

        {this.state.displayUpdateForm && 
          <UpdateForm
            chosenCat={this.state.chosenCat}
            updateName={this.updateCat}
            replaceACat={this.replaceACat}
          />
        }
      </>
    )
  }
}

export default App;
