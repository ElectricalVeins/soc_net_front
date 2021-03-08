import { io } from 'socket.io-client';
import config from 'api/config';

const {
  ws: { baseUrl },
} = config;

const socket = io(baseUrl);

socket.on('connect', () => {
  console.log('ok ws');
});

export default socket;
