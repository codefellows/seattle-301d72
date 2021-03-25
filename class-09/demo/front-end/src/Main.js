import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  componentDidMount = async () => {
    const jobs = await axios.get(`${process.env.REACT_APP_SERVER}/jobs`);
    this.setState({ jobs: jobs.data })
  }

  render() {
    return(
      <>
        {this.state.jobs.length && this.state.jobs.map((job, idx) => (
          <div key={idx}>
            <h2><a href={job.url}>{job.name}</a></h2>
            <h3><a href={job.company_logo_url ? job.company_logo_url : ''} >{job.company_name}</a></h3>
            <p>{job.description}</p>
            <p>{job.salary ? job.salary : 'no salary available'}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Main;