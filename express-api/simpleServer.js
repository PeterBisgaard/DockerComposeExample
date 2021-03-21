// Made with inspiration from https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-set-up-the-server--cms-31698

//  Load in the http module, set a port number (I chose 3001), and create the server with the createServer() method.
const http = require('http');
const port= 3001;
const server = http.createServer();


server.on('request', function (request, response) {
        console.log(`URL: ${request.url}`);
        response.end('Hello, server!');
    })

server.listen(port, (error) => {
    if (error) return console.log(`error: ${error}`);
    console.log(`Server i listening on port ${port}`);
})