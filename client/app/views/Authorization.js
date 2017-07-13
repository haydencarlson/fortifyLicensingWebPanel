import React, { Component } from 'react';
import NavBar from '../components/navBar.js';
import { ToastContainer } from 'react-toastify';

export default class Authorization extends Component {
  render() {
    return (
      <div className="AuthorizationPageContainer">
        <NavBar/>
        <ToastContainer/>
      </div>
    )
  }
}
