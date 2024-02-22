#! /opt/homebrew/bin/node
const http = require('http')
const args = process.argv;
const getConfig = require('../config');


const config = getConfig(args);
const hostname = config.hostname;
const port = config.port;

const server = http.createServer((req, res) => {
    if(req.url && req.url.endsWith('/home')) { //home
        res.statusCode = 200; //success response
        res.setHeader('Content-Type', 'text/plain'); // set the template
        res.end('Welcome to home!'); // return the text value
        
    }
    else {
        // res.statusCode = 404;
        // res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //res.end('Invalid request due to bad URL');
        //res.setHeader('')
        res.end(JSON.stringify({hostname: hostname, port:port}));
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

// node helloserver.js
// node helloserver.js 120.0.0.1 990