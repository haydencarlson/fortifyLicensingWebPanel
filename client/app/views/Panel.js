import React, { Component } from 'react';
import NavBar from '../components/navBar.js';
import { ToastContainer } from 'react-toastify';
import { browserHistory } from 'react-router';

export default class Panel extends Component {
  render() {
    return (
      <div className="PanelPageContainer">
        <NavBar/>
        <ToastContainer/>
        <span>Panel</span>
      </div>
    )
  }
}
