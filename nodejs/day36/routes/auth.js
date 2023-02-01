const express = require("express");
const authController = require("../controllers/auth");
const { check, body } = require("express-validator/check");
const router = express.Router();
const User= require('../models/user')

router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  [check("email")
    .isEmail()
    .withMessage("Enter a valid E-mail address.")
    .custom((value, { req }) => {
      // if (value === "test@test.com") {
      //   throw new Error("This email address if forbidden.");
      //   }
      //   return true;
      User.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject('E-Mail exists already, pick a different one.')
        }
      }).catch(err=>console.log(err))
    }),
    body('password', 'Enter a password with only numbers and text and at least 4 characters.').isLength({ min: 4 }).isAlphanumeric(),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match.");
      }
      return true;
  })],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
