import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return(
      <div onClick={() => this.props.handleModalShowHide(this.props.index)}>
        <img width={100} src={this.props.src} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;


// this.props={
//   src="...",
//   title="...",
//   description="...."
// }
