const http = require('http');
const fs = require('fs');
const port = 5050;

const server = http.createServer((req, res) => {
    
})
console.log(`Server Started Sucessfully on port: ${port}`);

server.listen(port);