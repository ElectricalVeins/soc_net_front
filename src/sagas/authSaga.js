import { put } from 'redux-saga/effects';
import * as ActionCreator from 'actions/actionCreators';
import * as API from 'api/rest';

export function * loginUser (action) {
  try {
    const {
      data: { user },
    } = yield API.loginUser(action.data);
    yield put(ActionCreator.loginUserSuccess({ user }));
    action.history.replace('/');
  } catch (error) {
    yield put(ActionCreator.loginUserError({ error }));
  }
}

export function * signUpUser (action) {
  try {
    const {
      data: { user },
    } = yield API.signUpUser(action.data);
    yield put(ActionCreator.signUpSuccess({ user }));
    action.history.replace('/');
  } catch (error) {
    yield put(ActionCreator.signUpError(error));
  }
}

export function * authenticate (action) {
  try {
    const { data: user } = yield API.authenticate();
    yield put(ActionCreator.authSuccess({ user }));
  } catch (error) {
    yield put(ActionCreator.authError({ error }));
  } finally {
    yield put(ActionCreator.initialize());
  }
}

export function * signOut (action) {
  localStorage.removeItem('aToken');
  localStorage.removeItem('rToken');
  yield put(ActionCreator.signOutSuccess());
}
