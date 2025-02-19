
var http = require('http');
const data = require('./data');

http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
