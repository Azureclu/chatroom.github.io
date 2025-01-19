const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('createAccount', (data) => {
        // Here, you should add code to save the user to your database
        console.log('Account created for', data.username);
        socket.emit('accountCreated');
    });

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
