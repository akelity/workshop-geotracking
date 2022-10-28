// Init express
const express = require('express');
const app = express();

// http port to listen
const port = 3000;

// Create API  
app.get('/api', (req, res) => {
    res.send('Hello World!!!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})