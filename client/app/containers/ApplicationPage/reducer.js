/*
 *
 * ApplicationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_APPLICATIONS,
  USERS_APPLICATIONS
} from './constants';

const initialState = fromJS({
  applications: null
});

function applicationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USERS_APPLICATIONS:
      return state.set('applications', action.payload);
    default:
      return state;
  }
}

export default applicationPageReducer;
