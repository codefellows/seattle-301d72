import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={(e) => this.props.getCats(e)}>
        <label>enter your name</label>
        <input onChange={(e) => this.props.updateName(e.target.value)}></input>
      </form>
    )
  }
}

export default Form;
