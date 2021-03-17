import React from 'react';
import child from './assets/teen.jpg';

class Child extends React.Component {
  iNeedMoney = () => {
    this.props.iWantMoney();
  }

  render() {
    console.log('billy:', this.props)
    return(
      <>
        <h2>Hi, I'm Billy and I have {this.props.billysMoney} dollars</h2>
        <button onClick={this.iNeedMoney}>Give me money</button>
        <img src={child} alt="teen" width={200} title="teen" />
      </>
    )
  }
}

export default Child;
