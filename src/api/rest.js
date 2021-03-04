import http from 'api';

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
  authUser('/auth/refresh', localStorage.getItem('rToken'));

export const createUser = payload => http.post('/auth/sign-up', payload);
export const loginUser = payload => http.post('/auth/sign-in', payload);

export const getUsers = ({ limit, offset }) =>
  http.get(`/users?limit=${limit}&offset=${offset}`);
