var http = require('http');
http.creatserver;
(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
});