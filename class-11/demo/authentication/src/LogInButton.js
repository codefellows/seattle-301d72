import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  // const obj = {
  //   name: 'bob', 
  //   hair: 'blue'
  // }

  // const { name, hair } = obj;

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;