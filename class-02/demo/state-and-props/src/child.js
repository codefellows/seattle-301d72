import React from 'react';
import boy from './assets/boy.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Child extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numberOfPatsOnTheHead: 0
    }
  }

  patJohnOnTheHead = () => {
    this.setState({ numberOfPatsOnTheHead: this.state.numberOfPatsOnTheHead + 1 });
  }

  render() {
    console.log('childs props', this.props, this.state);
    return(
      <>
      <Card className="bg-dark text-white">
        <Card.Img src={boy} alt={this.props.name} />
        <Card.ImgOverlay onClick={this.patJohnOnTheHead}>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Hi! I'm a kid and I'm 10 and I'm really good.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </>
    )
  }
}

export default Child;