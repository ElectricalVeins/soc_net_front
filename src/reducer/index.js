import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  posts: postReducer,
  users: usersReducer,
});

export default rootReducer;
