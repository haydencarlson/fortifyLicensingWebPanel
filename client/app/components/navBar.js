import React, { Component } from 'react';
import LoginForm from './loginForm.js';
import RegisterForm from './registerForm.js';
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand siteTitle" href="#">Fortify Licensing Panel</a>
          </div>
            <LoginForm/>
            <RegisterForm/>
          </div>
        </nav>
    )
  }
};
