const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const MONGODB_URI = 'mongodb+srv://ram:1234@cluster0.g2mbgoo.mongodb.net/test1';
const User = require('./models/user');
const errorController = require('./controllers/error');


const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false, store:store }));

// app.use((req, res, next) => {
//     User.findById(req.session.user._id)
//         .then(user => {
//             req.user = user;
//             next()
//         }).catch(err => {
//             console.log(err)
//         })
// })

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI)
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                
                const user = new User({
                    name: 'Ram',
                    email: 'ram@gmail.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
                app.listen(3000);
                console.log("Database Connected...");
    })
    .catch(err => {
        console.log(err)
    });

