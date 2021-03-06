import ACTIONS from 'actions';
import axios from 'axios';
import store from 'store';
import config from './config';
import { refreshTokens } from './rest';

const http = axios.create({
  baseURL: config.api.baseUrl,
});

http.interceptors.request.use(config => {
  config.headers.authorization = window.localStorage.getItem('aToken');

  return config;
});

http.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      const {
        tokenPair: { accessToken },
      } = await refreshTokens();

      error.config.data = localStorage.getItem('aToken');
      store.dispatch({ type: ACTIONS.AUTHENTICATE_REQUEST });
      return http.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default http;
