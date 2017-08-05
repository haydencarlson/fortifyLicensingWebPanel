import { takeLatest, takeEvery } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import mockMenuApi from '../../api/mockMenuApi';
import * as API from './api.js';
import axios from 'axios';
import {
  SIGN_IN,
  SIGN_IN_FACEBOOK,
  SIGN_IN_GOOGLE,
  REGISTER,
  RESET_PASSWORD,
  AUTHENTICATED,
  AUTHENTICATION_FAILED,
  LOAD_MENU,
  CHECK_AUTH,
  LOAD_MENU_SUCCESS,
} from './constants';

// worker Saga: will be fired on LOAD_MENU actions
export function* fetchMenu(action) {
  try {
    const data = yield call(mockMenuApi.getMenu, action);
    yield put({ type: LOAD_MENU_SUCCESS, data });
  } catch (e) {
    yield put({ type: 'LOAD_MENU_FAILED', message: e.message });
  }
}

/**
 * Watches for LOAD_MENU actions and calls fetchMenu when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */

export function* appSaga() {
  yield fork(takeLatest, LOAD_MENU, fetchMenu);
}


async function fetchSignInAsync (email, password) {
  var payload = {email: email ,password: password};

  var payloadData = ( "json", JSON.stringify( payload ) );

  let response = await fetch("http://localhost:3000/auth", {
    method: "POST",
    body: payloadData,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  });

  let data = await response.json();

  return data;
}

async function fetchSignUpAsync (fullName, email, password, passwordConfirmation) {
  var payload = {email, password, fullName, passwordConfirmation};

  var payloadData = ( "json", JSON.stringify( payload ) );

  console.log('Awaiting post of new user');
  let response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: payloadData,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  console.log("This is my response", response);
  let data = await response.json();

  console.log(data, 'data here');

  return data;
}

export function* fetchSignIn(action) {
  try {
  const response = yield call(fetchSignInAsync, action.payload.email, action.payload.password);
    if (response.status) {
      localStorage.setItem('token', response.token);
      yield put({ type: AUTHENTICATED,
        user: {
          name: 'John Smith',
          email: action.payload.email,
        },
      });
    } else {
      yield put({
        type: AUTHENTICATION_FAILED,
        message: 'Wrong user or password, please try again.',
      });
    }
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_FAILED', message: e.message });
  }
}

export function* signIn() {
  yield fork(takeLatest, SIGN_IN, fetchSignIn);
}

export function* fetchRegister(action) {

  try {
    const response = yield call(fetchSignUpAsync, action.payload.fullName, action.payload.email, action.payload.password, action.payload.password_confirmation);
    if (response.status) {
      localStorage.setItem('token', response.token.token);
      yield put({ type: AUTHENTICATED,
        user: {
          name: response.user.fullName,
          email: response.user.email,
        },
      });
    } else {
      yield put({ type: 'AUTHENTICATION_FAILED', message: e.message });
    }
    // here you can call your API in order to register an user, for this demo just authenticate an user
  } catch (e) {
    yield put({ type: 'REGISTRATION_FAILED', message: e.message });
  }
}

export function checkJwt(action) {
  console.log(API.getAuthToken())
  if (API.getAuthToken()) {
    return axios.post('http://localhost:3000/auth/jwt', {
      token: API.getAuthToken()
    }).then(function(response) {
      return response;
    });
  } else {
    return false;
  }
}


export function *checkAuth(dispatch) {
  yield take(CHECK_AUTH);
  yield put({type: 'app/LOADING', payload: true})

  const auth_response = yield call(checkJwt);
  const user = auth_response.data.user[0];

  if (auth_response.data && auth_response.data.status === 200) {
    yield put({type: 'app/LOADING', payload: false})
    yield put({type: 'app/AUTHENTICATED', payload: {user: user}});
  } else {
    yield put({type: 'app/LOADING', payload: false})
    yield put({type: 'app/AUTHENTICATION_FAILED', message: "Please login"})
  }

}

export function* register() {
  yield fork(takeLatest, REGISTER, fetchRegister);
}

export function* fetchResetPassword(action) {
  try {
    // here you can call your API in order to reset the password, for this demo just authenticate an user
    yield put({ type: AUTHENTICATED,
      user: {
        name: 'John Smith',
        email: action.payload.email,
      },
    });
  } catch (e) {
    yield put({ type: 'RESET_PASSWORD_FAILED', message: e.message });
  }
}

export function* resetPassword() {
  yield fork(takeLatest, RESET_PASSWORD, fetchResetPassword);
}

// All sagas to be loaded
export default [
  appSaga,
  signIn,
  register,
  resetPassword,
  checkAuth
];
