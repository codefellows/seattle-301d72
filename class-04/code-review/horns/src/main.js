import React from 'react';
import HornedBeast from './hornedBeast';

// {
//   "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//   "title": "UniWhal",
//   "description": "A unicorn and a narwhal nuzzling their horns",
//   "keyword": "narwhal",
//   "horns": 1
// },

class Main extends React.Component {


  render() {
    return(
      <>
        {this.props.cards.map((beast, index) => (
          <HornedBeast 
            key={index}
            width={100}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            index={index}
            handleModalShowHide={this.props.handleModalShowHide}
          />
        ))
        
        }
      </>
    )
  }
}

export default Main;
