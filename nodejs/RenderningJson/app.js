var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    
    fs.readFile("./user.json","utf-8",function (err,data) {
        if (err) throw err;

        response.writeHead(200, { 'Content-Type': 'application/json' })
        
        data1 = JSON.parse(data);

        response.write(JSON.stringify(data1));
        response.end()
    })

    
}).listen(3030)
console.log("Server Created");