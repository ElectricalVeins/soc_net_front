import { put } from 'redux-saga/effects';
import ACTIONS from 'actions';
import * as API from 'api/rest';

export function * getPosts (action) {
  try {
    const { offset = 0, limit = 10 } = action;
    const { data: posts } = yield API.getPosts({ offset, limit });

    yield put({
      type: ACTIONS.GET_POSTS_SUCCESS,
      posts,
    });
  } catch (error) {
    yield put({
      type: ACTIONS.GET_POSTS_ERROR,
      error,
    });
  }
}
