import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Authorization from './views/Authorization.js';
import Panel from './views/Panel.js';
import services from './services/index.js';
import * as actions from './actions/index.js';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route path="/" onEnter={services.checkIfLoggedIn} component={Authorization}/>
      <Route path="/panel" onEnter={services.checkIfLoggedIn} component={Panel}/>
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
