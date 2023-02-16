const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const User = require('./models/user');
const errorController = require('./controllers/error');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findById('63bec6f1c40fbde4e852d7f2')
//         .then(user => {
//             req.user = new User(user.name, user.email, user.cart, user._id);
//             // console.log(user);
//             next();
//     }).catch(err=>{
//         console.log(err)
//     })
// })

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ram:1234@cluster0.g2mbgoo.mongodb.net/test1')
    .then(result => {
        app.listen(3000);
        console.log("Database Connected...");
    })
    .catch(err => {
        console.log(err)
    });

