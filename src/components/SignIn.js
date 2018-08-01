import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {SignUpLink} from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';


const SignInPage = ({history}) =>
  <div>
    <h1>Sign In Page</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component{
  constructor(props){
    super(props);

    this.state = {INITIAL_STATE};
  }
  
  onSubmit = (event) => {
    //So I don't have to access state every time I want a variable
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({INITIAL_STATE});
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      })
      event.preventDefault();
  }
  
  render(){
    const{
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';


    return(
      <form onSubmit={this.onSubmit}>
        <input
          value = {email}
          onChange = {event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder = "Email Address"
        />
        <br />
        <input
          value = {password}
          onChange = {event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder = "Password"
        />
        <br />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm
};