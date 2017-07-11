import React, { Component } from 'react';
import LoginForm from '../components/loginForm.js';
export default class Authorization extends Component {
  render() {
    return (
      <div className="AuthorizationPageContainer">
        <LoginForm/>
      </div>
    )
  }
}
