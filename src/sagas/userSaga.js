import { put } from 'redux-saga/effects';
import * as ActionCreator from 'actions/actionCreators';
import * as API from 'api/rest';

export function * getUsers (action) {
  try {
    const { offset, limit } = action;
    const {
      data: { users },
    } = yield API.getUsers({ offset, limit });

    yield put(ActionCreator.getUsersSuccess({ users }));
  } catch (error) {
    yield put(ActionCreator.getUsersError({ error }));
  }
}
