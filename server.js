// Init express
const express = require('express');
const app = express();

// Init http and socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

// http port to listen
const port = 3000;

// Store Position
let sockets = {}

// Socket.io
io.on('connection', function(socket) {
    console.log('Socket Connected ', socket.id);
    sockets[socket.id] = socket;
    
    socket.on('positionToServer', function (data) {
        console.log('positionToServer ', data);
        Object.keys(sockets).forEach(key => {
            sockets[key].emit('positionToClient', data);
        });
    });

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('Socket disconnected');
        Object.keys(sockets).forEach(key => {
            sockets[key].emit('deleteToClient', socket.id);
        });
        delete sockets[socket.id]
    });
});

// Create API  
app.get('/api', (req, res) => {
    res.send('Hello World!!!')
});

// Init the Frontend
app.use(express.static( __dirname + '/app' ));

// Start the server
http.listen(port, () => console.log(`Example app listening on port ${port}`));
