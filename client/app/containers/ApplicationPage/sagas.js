// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_APPLICATIONS
} from './constants';


function* fetchApplications(action) {

  // var payload = {email, password, fullName, passwordConfirmation};
  //
  // var payloadData = ( "json", JSON.stringify( payload ) );
  //
  // console.log('Awaiting post of new user');
  // let response = await fetch("http://localhost:3000/users", {
  //   method: "POST",
  //   body: payloadData,
  //   headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // });
  // console.log("This is my response", response);
  // let data = await response.json();
  //
  // return data;
}

// Individual exports for testing
export function* receiveFetchApplicationsAction() {
  yield takeLatest(FETCH_APPLICATIONS, fetchApplications);
}

// All sagas to be loaded
export default [
  receiveFetchApplicationsAction,
];
