import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Authorization from './views/Authorization.js';
import services from './services/index.js';
import * as actions from './actions/index.js';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
      <Route path="/" onEnter={services.checkIfLoggedIn()} component={Authorization}/>
      </Router>
    )
  };
}

function mapStateToProps(state) {
  return ({
    currentUser: state.currentUser
  });
};

export default connect(mapStateToProps, null)(App);
