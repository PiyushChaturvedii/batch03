var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    
    var path = url.parse(request.url).pathname;
    console.log(path);

    switch (path) {
        case "/":
            renderHTML('./index.html', response);
            break;
        case "/about":
            renderHTML('./about.html', response);
            break;
        case "/login":
            renderHTML('./login.html', response);
            break;
        case "/service":
            renderHTML('./service.html', response);
            break;
        case "/signup":
            renderHTML('./signup.html', response);
            break;
    
        default:
            response.writeHead(404);
            response.write("Jai Shree Ram");
            response.end();
    }



}).listen(3000);

console.log("Server created");



function renderHTML(path,response) {
    fs.readFile(path, "utf-8", function (err,data) {
        if (err) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data)
  
        }
        response.end()
    })
}