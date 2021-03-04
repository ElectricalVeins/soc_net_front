import axios from 'axios';
import config from './config';
import { refreshTokens } from './rest';

const http = axios.create({
  baseURL: config.api.baseUrl,
});

http.interceptors.request.use(config => {
  config.headers.authorization = window.localStorage.getItem('aToken');

  return config;
});

axios.interceptors.response.use(
  response => {
    console.log('response', response);
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      await refreshTokens();
      return http.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default http;
