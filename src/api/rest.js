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
  authUser('/auth/refresh', { refreshToken: localStorage.getItem('rToken') });
export const authenticate = () =>
  http.post('/auth', { accessToken: localStorage.getItem('aToken') });

export const loginUser = payload => authUser('/auth/sign-in', payload);
export const signUpUser = payload => authUser('/auth/sign-up', payload);

export const getUsers = ({ limit, offset }) =>
  http.get(`/users?limit=${limit}&offset=${offset}`);
