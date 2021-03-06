import createReducer from './createReducer';
import { THEMES } from 'constants.js';
import ACTIONS from 'actions';

const initialState = {
  theme: THEMES.LIGHT_THEME,
};

const handlers = {
  [ACTIONS.THEME_SWITCH]: (state, action) => {
    return {
      ...state,
      theme: action.theme,
    };
  },
};

export default createReducer(handlers, initialState);
