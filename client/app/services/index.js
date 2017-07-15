import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import { store } from '../Index.js';
export default {
  checkIfLoggedIn: (nextState) => {
    console.log(nextState);
    let token = localStorage.getItem('token');
    window.store.dispatch(actions.verifyUser(token));
  }
};
