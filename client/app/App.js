import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Authorization from './views/Authorization.js';
import * as actions from './actions/index.js';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
      <Route path="/"/>
      <Route path="/authorization" component={Authorization} />
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
