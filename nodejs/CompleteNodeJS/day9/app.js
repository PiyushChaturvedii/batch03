const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const rootDir = require('./util/path');

app.set('view engine', 'pug');

app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
})
console.log("Server Listen at 5000");
app.listen(5000);