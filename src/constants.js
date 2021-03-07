import config from 'api/config';

export const THEMES = {
  LIGHT_THEME: Symbol('LIGHT_THEME'),
  DARK_THEME: Symbol('DARK_THEME'),
};

export const IMAGE_PATH = `${process.env.REACT_APP_BASE_URL}/images/`;
