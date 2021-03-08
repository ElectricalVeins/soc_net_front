const config = {
  api: {
    baseUrl:
      `${process.env.REACT_APP_BASE_URL}/api` || 'http://localhost:3000/api',
  },
  ws: {
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  },
};

export default config;
