import React from 'react';
import Child from './child';
import mom from './assets/mom.jpg';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myMoney:50,
      billysMoney:2
    }
  }

  giveMoneyToBilly = () => {
    // take money out of her state
    this.setState({ myMoney: this.state.myMoney - 5 });
    // put money into Billy's money
    this.setState({ billysMoney: this.state.billysMoney + 5 });
  }

  render() {
    return(
      <>
        <h2>Hi, I'm the mom</h2>
        <p>I have {this.state.myMoney} dollars</p>
        <img src={mom} alt="mom" width={200} title="mom" />
        <Child 
          billysMoney={this.state.billysMoney}
          iWantMoney={this.giveMoneyToBilly}
        />
      </>
    )
  }
}

export default Parent;
