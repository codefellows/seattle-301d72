import React from 'react';
import Main from './main';
import SelectedBeast from './selectedBeast';
import rawData from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rawData: rawData,
      show: false,
      selectedBeast: {}
    }
  }

  handleModalShowHide = (index) => {
    console.log('in the click', index);
    this.setState({ show: true,  selectedBeast: this.state.rawData[index]});
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  render() {
    console.log('app', this.state)
    return(
      <>
        <Main
          cards={this.state.rawData}
          handleModalShowHide={this.handleModalShowHide}
        />
        <SelectedBeast
          show={this.state.show}
          selectedBeast={this.state.selectedBeast}
          hide={this.handleHide}
        />
      </>
    )
  }
}

export default App;
