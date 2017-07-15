import React, { Component } from 'react';
import NavBar from '../components/navBar.js';
import { ToastContainer } from 'react-toastify';
import services from '../services/index.js';
import { browserHistory } from 'react-router';

export default class Panel extends Component {
  render() {
    return (
      <div className="AuthorizationPageContainer">
        <NavBar/>
        <ToastContainer/>
        Panel
      </div>
    )
  }
}
