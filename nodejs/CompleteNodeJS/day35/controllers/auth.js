const bcrypt = require('bcryptjs');
var crypto = require('crypto');

const User = require('../models/user');
var postmark = require("postmark");

var client = new postmark.ServerClient("092ba29e-1f82-457d-8dc3-b3e20ff66811");

// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         Username: 'apikey',
//         Password: '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'
//     }
// }))

// let transporter = nodemailer.createTransport({
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     auth: {
//         user: "apikey",
//         pass: "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"
//     }
// })
exports.getLogin = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        errorMessage: message
    });
}

exports.getReset = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/reset', {
        path: '/reset',
        pageTitle: 'Reset Password',
        errorMessage: message
    });
}

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        errorMessage: message
    })
}

exports.getNewPassword = (req, res, next) => {
    const token = req.params.token;
    User.findOne({ resetToken: token, resetTokenExpiration: {$gt: Date.now()}
})
        .then(user => {
            let message = req.flash('error');
            if (message.length > 0) {
                message = message[0];
            } else {
                message = null;
            }
            res.render('auth/new-password', {
                path: '/new-password',
                pageTitle: 'New Password',
                errorMessage: message,
                userId: user._id.toString(),
                passwordToken: token
            })    
    })
    .catch(err => { console.log(err) })
}




exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.flash('error', 'Invalid email.');
                return res.redirect('/login');
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            res.redirect('/');
                        });
                    }
                    req.flash('error', 'Invalid password.');
                    res.redirect('/login');
                }).catch(err => {
                    console.log(err);
                    res.redirect('/login')
                })

        }).catch(err => {
            console.log(err)
        })
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
}


exports.postReset = (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect('/reset');
        }
        const token = buffer.toString('hex');
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    req.flash('error', 'No account with that email found.');
                    return res.redirect('/reset');
                }
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                return user.save();
            })
            .then(result => {
                client.sendEmail({
                    "From": "hello@aeeron.in",
                    "To": "hello@aeeron.in",
                    "Subject": "Password Reset",
                    "HtmlBody": `
                    <p> You requested a password reset</p>
                    <p> Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
                `,
                    "TextBody": "Hello from Postmark!",
                    "MessageStream": "shop"
                })

            })
            .catch(err => { console.log(err) })
    })
}

    exports.postNewPassword = (req, res, next) => {
        const newPassword = req.body.password;
        const userId = req.body.userId;
        const passwordToken = req.body.passwordToken;
        let resetUser;

        User.findOne({
            resetToken: passwordToken,
            resetTokenExpiration: { $gt: Date.now() },
            _id: userId
        })
            .then(user => {
                resetUser = user;
                return bcrypt.hash(newPassword, 12);
            }).then(hashedPassword => {
                resetUser.password = hashedPassword;
                resetUser.resetToken = undefined;
                resetUser.resetTokenExpiration = undefined;
                return resetUser.save();
            }).then(result => {
                res.redirect('/login');
            })
            .catch(err => { console.log(err) })
    }





exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                req.flash('error', 'E-Mail exists already, pick a different one.');
                return res.redirect('/signup');
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] }
                    });
                    return user.save();
                })
                .then(result => {

                    res.redirect('/login');
                    client.sendEmail({
                        "From": "hello@aeeron.in",
                        "To": "hello@aeeron.in",
                        "Subject": "Hello from Postmark",
                        "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
                        "TextBody": "Hello from Postmark!",
                        "MessageStream": "shop"
                    })
                    console.log('Email sent: ')
                }).catch(err => (console.log(err)))
        })
        .catch(err => (console.log(err)))
}
