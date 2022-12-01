var http = require('http');
var fs = require('fs');
const { type } = require('os');

http.createServer(function (req, res) {
    
    var content = "<h1>Welcome</h1><p>This is content</p>";


    fs.writeFile('new.html', content, function (err) {
        if (err) throw err;
        console.log("Data saved");
    })

    fs.open('new.html', 'a', function (err,fd) {
        fs.appendFile(fd, '<p>Shri Ram</p>', function (err) {
            if (err) throw err;
            console.log("Data overwrite");

            fs.close(fd,function (err) {
                if (err) throw err;
            })
        })
    })

    fs.readFile('new.html',function (err,data) {
        if (err) throw err;

        res.writeHead('200', { 'Content-type': 'text/html' })
        res.write(data);
        res.end()
    })



}).listen(8080);
console.log("Server Created");