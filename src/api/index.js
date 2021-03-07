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

http.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 419) {
      const {
        data: {
          tokenPair: { accessToken },
        },
      } = await refreshTokens();

      error.config.data = { accessToken };
      return http.request(error.config);
    }
    return Promise.reject(error);
  }
);

export default http;
