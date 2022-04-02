import socketIOClient from 'socket.io-client';

// const socketEndpoint = "http://localhost:5000/";
const socketEndpoint = "http://18.212.14.229:5000/";

export default socketIOClient(socketEndpoint, {
    query: `connected_user_type=user&vendor_id=${localStorage.getItem('vendor_id')}&auth=${localStorage.getItem('authKey')}`
});


