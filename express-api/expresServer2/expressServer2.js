// create Express server

const port = 3002;

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require('./routes');

router(app);

const server = app.listen(port, (error)=>{
    if (error) return console.log(`error: ${error}`);
    console.log(`Server i listening on port ${server.address().port}`);
})

