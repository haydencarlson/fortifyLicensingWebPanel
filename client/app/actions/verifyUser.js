import {TYPE_VERIFY_USER} from '../types.js';
import * as actions from './index.js';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

const verifyUser = (jwt) => {
  return dispatch => {
    dispatch(actions.toggleLoadingSpinner(true));
    axios.post('http://localhost:3000/users/verify', {
      jwt: jwt
    })
    .then(function (response) {
      dispatch(actions.toggleLoadingSpinner(false));
      if (response.data.status) {
        browserHistory.push('/panel')
      } else {
        browserHistory.push('/')
      }
    });
  }
}

export default verifyUser;
