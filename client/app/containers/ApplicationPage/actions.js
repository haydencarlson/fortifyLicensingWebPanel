/*
 *
 * ApplicationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_APPLICATIONS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchApplications(user_id) {
  return {
    type: FETCH_APPLICATIONS,
    payload: user_id
  };
}
