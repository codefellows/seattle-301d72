import React from 'react';
import Child from './child';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      childsName:"John"
    }
  }

  changeName = () => {
    this.setState({ childsName: 'Billy' });
  }

  render() {
    console.log('parent:', this.state)
    return(
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Hi - I am the parent</Navbar.Brand>
          <Button onClick={this.changeName}>Billy Button</Button>
        </Navbar>

        <Child name={this.state.childsName} />
      </>
    )
  }
}

export default Parent;
