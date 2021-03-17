import React from 'react';
import HornedBeast from './hornedBeast.js';
import rawData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      gallery: rawData
    }
  }

  // {
  //   "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
  //   "title": "UniWhal",
  //   "description": "A unicorn and a narwhal nuzzling their horns",
  //   "keyword": "narwhal",
  //   "horns": 1
  // },

  render() {
    return(
      <div id="beast-container">
        <CardDeck>
        {rawData.map((beast, index) => (
          <div key={index}>
            <HornedBeast 
              src = {beast.image_url}
              title = {beast.title}
              description = {beast.description}
            />
          </div>
        ))

        }
        </CardDeck>
      </div>
    )
  }
}

export default Main;