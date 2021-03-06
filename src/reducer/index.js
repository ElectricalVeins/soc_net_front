import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
});

export default rootReducer;
