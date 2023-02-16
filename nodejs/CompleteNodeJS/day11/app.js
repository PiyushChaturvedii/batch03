var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var expressHbs = require('express-handlebars');

var adminData = require('./routes/admin');
var shopRoutes = require('./routes/shop');

var app = express();

// view engine setup
// app.engine('hbs',expressHbs({layoutsDir: 'views/layouts/',defaultLayout:'main-layout'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
})
console.log("Server Listen at 5000");
app.listen(5000);

module.exports = app;
