var http = require('http');
var eval = require('./eval');
var custom = require('./custom');
var module3 = require('./module');



function onreq(request, response) {
    response.writeHead(202, { 'Content-type': 'text/plain' });
    response.write("Welcome to node.js again.");
    response.write("\n" + eval.sum(20, 25));
    response.write("\n" + eval.str);
    response.write("\n" + eval.multiply(4,5));
    response.write("\n" + custom.dt());
    response.write("\n" + custom.mystr);
    response.write("\n" + custom.mystr1);
    response.write("\n" + module3.myfunction());



    response.end();
}


http.createServer(onreq).listen(5050);
console.log("Server Created!");