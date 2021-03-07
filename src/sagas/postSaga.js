import { put } from 'redux-saga/effects';
import * as ActionCreator from 'actions/actionCreators';
import * as API from 'api/rest';

export function * getPosts (action) {
  try {
    const { offset, limit } = action;
    const { data: posts } = yield API.getPosts({ offset, limit });

    yield put(ActionCreator.getPostsSuccess({ posts }));
  } catch (error) {
    yield put(ActionCreator.getPostsError({ error }));
  }
}
