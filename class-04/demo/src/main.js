import React from 'react';
import FormInfo from './formInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      favoriteActivity: '',
      likesIceCream: false,
      show: false
    }
  }

  handleClose = () => this.setState({ show: false });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ show: true });
  }
  
  updateName = (e) => {
    const name = e.target.value;
    console.log('in the updateName', name)
    this.setState({ name: name });
  }

  updateActivity = (e) => this.setState({ favoriteActivity: e.target.value });

  updateIceCream = (e) => {
    const likesIceCream = e.target.value;
    this.setState({ likesIceCream: likesIceCream });
  }

  render() {
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="studentName">
            <Form.Label>name</Form.Label>
            <Form.Control onChange={this.updateName} type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="activity">
            <Form.Label>What is your favorite activity</Form.Label>
            <Form.Control onChange={this.updateActivity} type="text" placeholder="favorite activity" />
          </Form.Group>

          <Form.Group controlId="likesIceCream">
            <Form.Check onChange={this.updateIceCream} type="checkbox" label="Likes Ice Cream" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <FormInfo
          show={this.state.show}
          handleClose={this.handleClose}
          name={this.state.name}
          favoriteActivity={this.state.favoriteActivity}
          likesIceCream={this.state.likesIceCream}
        />
      </>
    )
  }
}

export default App;
