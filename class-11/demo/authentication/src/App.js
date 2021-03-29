import React from 'react';
import LoginButton from './LogInButton';
import LogOut from './LogOut';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

class App extends React.Component {
  render() {
    console.log(this.props.auth0);
     return(
       <>
      <LoginButton />
      <LogOut />

      {this.props.auth0.isAuthenticated && 
        <Profile />
      }
      </>
     )
  }
}

export default withAuth0(App);
