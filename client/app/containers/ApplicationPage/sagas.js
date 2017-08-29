// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_APPLICATIONS
} from './constants';

// Individual exports for testing
export function* fetchApplications() {
  yield take(FETCH_APPLICATIONS);
}

// All sagas to be loaded
export default [
  fetchApplications,
];
