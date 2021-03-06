import { put } from 'redux-saga/effects';
import ACTIONS from 'actions';
import * as API from 'api/rest';

export function * loginUser (action) {
  try {
    const {
      data: { user },
    } = yield API.loginUser(action.data);

    yield put({
      type: ACTIONS.LOGIN_USER_SUCCESS,
      user,
    });

    action.history.replace('/');
  } catch (error) {
    yield put({
      type: ACTIONS.LOGIN_USER_ERROR,
      error,
    });
  }
}

export function * signUpUser (action) {
  try {
    const {
      data: { user },
    } = yield API.signUpUser(action.data);
    yield put({
      type: ACTIONS.SIGN_UP_USER_SUCCESS,
      user,
    });
    action.history.replace('/');
  } catch (error) {
    yield put({
      type: ACTIONS.SIGN_UP_USER_ERROR,
      error,
    });
  }
}

export function * authenticate (action) {
  try {
    const { data: user } = yield API.authenticate();
    yield put({
      type: ACTIONS.AUTHENTICATE_SUCCESS,
      user,
    });
  } catch (error) {
    yield put({
      type: ACTIONS.AUTHENTICATE_ERROR,
      error,
    });
  }
}

export function * signOut (action) {
  localStorage.removeItem('aToken');
  localStorage.removeItem('rToken');
  yield put({
    type: ACTIONS.SIGN_OUT_SUCCESS,
  });
}
