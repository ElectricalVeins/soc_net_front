import createReducer from './createReducer';
import ACTIONS from 'actions';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTIONS.GET_USERS_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    error: null,
  }),
  [ACTIONS.GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: [...state.users, ...action.users],
    isFetching: false,
    error: null,
  }),
  [ACTIONS.GET_USERS_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isFetching: false,
  }),
};

export default createReducer(handlers, initialState);
