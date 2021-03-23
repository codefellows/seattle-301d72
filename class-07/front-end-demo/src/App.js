import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }

  componentDidMount = async() => {
    const SERVER = 'http://localhost:3001';
    const shopping = await axios.get(`${SERVER}/shopping`);
    const shoppingListArray = shopping.data;
    console.log({shoppingListArray});
    this.setState({ list: shoppingListArray });
  }

  render() {
    return(
      <>
      <h2>My target list</h2>
      {this.state.list.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
      </>

    )
  }
}

export default App;
