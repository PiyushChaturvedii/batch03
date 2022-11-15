var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var dataContent = "Jai Shree Ram";

    var writer = fs.createWriteStream('notes.txt');
    writer.write(dataContent, 'UTF-8');
    writer.end();

    writer.on('finish', function () {
        console.log('writing completed');
    }).on('error', function (err) {
        console.log(err)
    })
    
    var pipeReader = fs.createReadStream('notes.txt');
    var pipeWriter = fs.createWriteStream('xyz.txt');
    pipeReader.pipe(pipeWriter);
    pipeWriter.on('finish', function () {
      
        var content = '';
        var reader = fs.createReadStream('xyz.txt');
        reader.setEncoding('UTF-8');
        reader.on('error', function (err) {
            console.log(err);
        }).on('data', function (chunk) {
            content += chunk;
        }).on('end', function () {
            res.on('error', function (err) {
                console.log(err);
            });

            res.setHeader('200', { 'Content-Type': 'plain/text' })

            res.write(content);
            res.end();
        })


    })






}).listen(8080);
console.log("Server ready to listen port: 8080");