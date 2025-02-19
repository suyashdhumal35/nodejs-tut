const http = require('http');

// function dataControl(req, resp) {
//     resp.write("<h1> Hello this is suyash <h1/>");
//     resp.end();
// }


http.createServer((req, resp) => {
    resp.write("<h1> Hello this is suyash <h1/>");
    resp.end();
}).listen(4500);
