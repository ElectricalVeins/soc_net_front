import ACTIONS from './actions';

export const switchTheme = theme => ({ type: ACTIONS.THEME_SWITCH, theme });

export const initialize = () => ({ type: ACTIONS.INITIALIZE });

export const loginUserRequest = ({ values, history }) => ({
  type: ACTIONS.LOGIN_USER_REQUEST,
  data: values,
  history,
});
export const loginUserSuccess = ({ user }) => ({
  type: ACTIONS.LOGIN_USER_SUCCESS,
  user,
});
export const loginUserError = ({ error }) => ({
  type: ACTIONS.LOGIN_USER_ERROR,
  error,
});

export const signUpRequest = ({ data, history }) => ({
  type: ACTIONS.SIGN_UP_USER_REQUEST,
  data,
  history,
});
export const signUpSuccess = ({ user }) => ({
  type: ACTIONS.SIGN_UP_USER_SUCCESS,
  user,
});
export const signUpError = ({ error }) => ({
  type: ACTIONS.SIGN_UP_USER_ERROR,
  error,
});

export const authRequest = () => ({ type: ACTIONS.AUTHENTICATE_REQUEST });
export const authSuccess = ({ user }) => ({
  type: ACTIONS.AUTHENTICATE_SUCCESS,
  user,
});
export const authError = ({ error }) => ({
  type: ACTIONS.AUTHENTICATE_ERROR,
  error,
});

export const signOut = () => ({ type: ACTIONS.SIGN_OUT });
export const signOutSuccess = () => ({ type: ACTIONS.SIGN_OUT_SUCCESS });

export const getPostsRequest = ({ limit, offset } = {}) => ({
  type: ACTIONS.GET_POSTS_REQUEST,
  limit,
  offset,
});
export const getPostsSuccess = ({ posts }) => ({
  type: ACTIONS.GET_POSTS_SUCCESS,
  posts,
});
export const getPostsError = ({ error }) => ({
  type: ACTIONS.GET_POSTS_ERROR,
  error,
});

export const getUsersRequest = ({ limit, offset } = {}) => ({
  type: ACTIONS.GET_USERS_REQUEST,
  limit,
  offset,
});
export const getUsersSuccess = ({ users }) => ({
  type: ACTIONS.GET_USERS_SUCCESS,
  users,
});
export const getUsersError = ({ error }) => ({
  type: ACTIONS.GET_USERS_ERROR,
  error,
});
