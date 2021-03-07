import http from 'api';
import queryString from 'query-string';

export const authUser = async (url, data) => {
  try {
    const response = await http.post(url, data);
    const {
      data: { tokenPair },
    } = response;

    localStorage.setItem('aToken', tokenPair.accessToken);
    localStorage.setItem('rToken', tokenPair.refreshToken);
    return response;
  } catch (error) {
    throw error;
  }
};

export const refreshTokens = () =>
  authUser('/auth/refresh', { refreshToken: localStorage.getItem('rToken') });
export const authenticate = () =>
  http.post('/auth', { accessToken: localStorage.getItem('aToken') });

export const loginUser = payload => authUser('/auth/sign-in', payload);
export const signUpUser = payload => authUser('/auth/sign-up', payload);

export const getUsers = ({ limit = 10, offset = 0, ...rest }) =>
  http.get(`/users?${queryString.stringify({ limit, offset, ...rest })}`);

export const getPosts = ({ limit = 10, offset = 0, ...rest }) =>
  http.get(`/posts?${queryString.stringify({ limit, offset, ...rest })}`);
