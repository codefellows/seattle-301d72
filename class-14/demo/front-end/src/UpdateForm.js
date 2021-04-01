import React from 'react';

class UpdateForm extends React.Component {

  render() {
    return(
      <form onSubmit={(e) => this.props.replaceACat(e)}>
        <input onChange={(e) => this.props.updateName(e.target.value)} placeholder={this.props.chosenCat.name}></input>
      </form>
    )
  }
}

export default UpdateForm;
