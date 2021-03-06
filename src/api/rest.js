import http from 'api';

export const authUser = async (url, data) => {
  try {
    console.log(url, data);
    const response = await http.post(url, data);
    const {
      data: { tokenPair },
    } = response;

    localStorage.setItem('aToken', tokenPair.accessToken);
    localStorage.setItem('rToken', tokenPair.refreshToken);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const refreshTokens = () =>
  authUser('/auth/refresh', localStorage.getItem('rToken'));

// export const signUpUser = payload => http.post('/auth/sign-up', payload);
// export const loginUser = payload => http.post('/auth/sign-in', payload);
export const loginUser = payload => authUser('/auth/sign-in', payload);
export const signUpUser = payload => authUser('/auth/sign-up', payload);

export const getUsers = ({ limit, offset }) =>
  http.get(`/users?limit=${limit}&offset=${offset}`);
