import createReducer from './createReducer';
import { THEMES } from 'constants.js';
import ACTIONS from 'actions';

const initialState = {
  theme: THEMES.LIGHT_THEME,
  isInitialized: false,
};

const handlers = {
  [ACTIONS.THEME_SWITCH]: (state, action) => ({
    ...state,
    theme: action.theme,
  }),
  [ACTIONS.INITIALIZE]: (state, action) => ({
    ...state,
    isInitialized: true,
  }),
};

export default createReducer(handlers, initialState);
