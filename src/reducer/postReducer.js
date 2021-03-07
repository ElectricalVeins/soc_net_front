import createReducer from './createReducer';
import ACTIONS from 'actions';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTIONS.GET_POSTS_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    error: null,
  }),
  [ACTIONS.GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    posts: [...state.posts, ...action.posts],
    isFetching: false,
    error: null,
  }),
  [ACTIONS.GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isFetching: false,
  }),
};

export default createReducer(handlers, initialState);
