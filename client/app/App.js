import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import * as actions from './actions/index.js';
import Main from "./views/Main.js";
import Login from "./views/Login.js"

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
      <Route path="/" component={Main}/>
      <Route path="/login" component={Login}/>
      </Router>
    )
  };
}

function mapStateToProps(state) {
  return ({
    currentTab: state.changeTab
  });
};

export default connect(mapStateToProps, null)(App);