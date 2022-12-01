var http = require('http');
var fs = require('fs');

http.createServer(function (request,response) {
    fs.readFile('./index.html',function (err,lakhan) {
        if (err) {
            response.writeHead(404);
            response.write('Page Not Found');
        }
        else {
            response.writeHead(200,{'Content-Type':'text/html'})
            response.write(lakhan);
            response.end()
        }
    })
}).listen(8080);

console.log("Server created!");