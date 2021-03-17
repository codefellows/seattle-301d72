import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './hornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favorites: 0
    }
  }

  addFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {
    return(
    <Card 
      style={{ width: '10rem' }}
      bg="warning"
      text="muted"
      className="beast"
      onClick={this.addFavorite}
      >
        <Card.Img variant="bottom" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            ❤️ = {this.state.favorites}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;