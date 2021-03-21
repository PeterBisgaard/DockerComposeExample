// create Express server

const express = require('express');
const port = 3002;
const app = express();

app.get('/', (req, res) => {
    console.log(`URL: ${req.url}`);
    res.send("Hello, server!");
})

const server = app.listen(port, (error)=>{
    if (error) return console.log(`error: ${error}`);
    console.log(`Server i listening on port ${server.address().port}`);
})
