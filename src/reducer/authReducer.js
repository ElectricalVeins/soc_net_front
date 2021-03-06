import createReducer from './createReducer';
import ACTIONS from 'actions';

const initialState = {
  isFetching: false,
  user: null,
  error: null,
};

const handlers = {
  [ACTIONS.SIGN_OUT_SUCCESS]: () => ({ ...initialState }),
  [ACTIONS.SIGN_UP_USER_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    error: null,
    user: null,
  }),
  [ACTIONS.SIGN_UP_USER_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    user: action.user,
    error: null,
  }),
  [ACTIONS.SIGN_UP_USER_ERROR]: (state, action) => ({
    ...state,
    isFetching: false,
    user: null,
    error: action.error,
  }),
  [ACTIONS.LOGIN_USER_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    error: null,
    user: null,
  }),
  [ACTIONS.LOGIN_USER_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    user: action.user,
    error: null,
  }),
  [ACTIONS.LOGIN_USER_ERROR]: (state, action) => ({
    ...state,
    isFetching: false,
    user: null,
    error: action.error,
  }),
  [ACTIONS.AUTHENTICATE_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    user: action.user,
  }),
  [ACTIONS.AUTHENTICATE_ERROR]: (state, action) => ({
    ...initialState,
  }),
};

export default createReducer(handlers, initialState);
