// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_APPLICATIONS,
  USERS_APPLICATIONS
} from './constants';


async function fetchApplications(action) {
  let auth_token = localStorage.getItem('token');
  var payload = {user_id: action.payload, token: auth_token};

  var payloadData = ( "json", JSON.stringify( payload ) );

  let response = await fetch("http://localhost:3000/applications/fetch", {
    method: "POST",
    body: payloadData,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  console.log("This is my response", response);
  let data = await response.json();

  return data;
}

// Individual exports for testing
export function* receiveFetchApplicationsAction() {

  const request = yield take(FETCH_APPLICATIONS)

  let response = yield call(fetchApplications, '')
  yield put({type: USERS_APPLICATIONS, payload: response.result})

}

// All sagas to be loaded
export default [
  receiveFetchApplicationsAction,
];
