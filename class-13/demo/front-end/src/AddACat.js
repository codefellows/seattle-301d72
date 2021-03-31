import React from 'react';

class AddACat extends React.Component {
  render(){
    return(
      <form onSubmit={(e) => this.props.createACat(e)}>
        <label>Add a Cat</label>
        <input onChange={(e) => this.props.updateCat(e.target.value)}></input>
      </form>
    )
  }
}

export default AddACat;
