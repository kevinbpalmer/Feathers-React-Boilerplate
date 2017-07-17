import feathers from 'feathers-client';
import io from 'socket.io-client';
import socketio from 'feathers-socketio/client';
import axios from 'axios';
import rest from 'feathers-rest/client';

const host = process.env.REACT_APP_SERVER_URL;

const socket = io(host);
const socketioClient = feathers()
.configure(feathers.hooks())
.configure(socketio(socket))
.configure(feathers.authentication({cookie: 'feathers-jwt', storage: window.localStorage}));

const restClient = feathers().configure(feathers.hooks()).configure(rest(host).axios(axios)).configure(feathers.authentication({cookie: 'feathers-jwt', storage: window.localStorage}));

export default {
    io: socketioClient,
    rest: restClient
};
