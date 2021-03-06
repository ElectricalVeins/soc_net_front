import { takeLatest } from 'redux-saga/effects';
import ACTIONS from 'actions';
import * as AuthSagas from './authSaga';

function * rootSaga () {
  yield takeLatest(ACTIONS.LOGIN_USER_REQUEST, AuthSagas.loginUser);
  yield takeLatest(ACTIONS.SIGN_UP_USER_REQUEST, AuthSagas.signUpUser);
  yield takeLatest(ACTIONS.AUTHENTICATE_REQUEST, AuthSagas.authenticate);
  yield takeLatest(ACTIONS.SIGN_OUT, AuthSagas.signOut);
}

export default rootSaga;
