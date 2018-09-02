import React from 'react';

import { auth } from '../firebase';



export default class SignOutButton extends React.Component{
  // handleSignOut(){
  //   auth.doSignOut;
  // } 
  render(){
      return(
        <button
          type="button"
          onClick={auth.doSignOut}
        >
          Sign Out
        </button>
      );
    }
}
