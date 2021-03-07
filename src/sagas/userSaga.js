import { put } from 'redux-saga/effects';
import ACTIONS from 'actions';
import * as API from 'api/rest';

export function * getUsers (action) {
  try {
    const { offset = 0, limit = 10 } = action;
    const {
      data: { users },
    } = yield API.getUsers({ offset, limit });

    yield put({
      type: ACTIONS.GET_USERS_SUCCESS,
      users,
    });
  } catch (error) {
    yield put({
      type: ACTIONS.GET_USERS_ERROR,
      error,
    });
  }
}
