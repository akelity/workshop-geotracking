// Init express
const express = require('express');
const app = express();

// Init http and socket.io
const http = require('http').Server(app);

// http port to listen
const port = 3000;

// Create API  
app.get('/api', (req, res) => {
    res.send('Hello World!!!')
});

// Init the Frontend
app.use(express.static( __dirname + '/app' ));

// Start the server
http.listen(port, () => console.log(`Example app listening on port ${port}`));
