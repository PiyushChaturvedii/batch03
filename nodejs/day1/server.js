const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("This is middleware!");
    next(); //Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log("This is middleware-2!");
    res.send('<h1>Hello from Express</h1>');
});


app.listen(3000);