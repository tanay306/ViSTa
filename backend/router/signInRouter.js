const express = require("express");
const signInRouter = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

signInRouter.route("/")
    .get( (req, res) => {
        // res.send("sign in page");
        res.render("signIn")
    })
    .post( (req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
          });
          req.login(user, function (err) {
            if (err) {
              console.log(err);
              res.render("signIn")
            } else {
                passport.authenticate("local")(req, res, function () {
                    // res.send("Successfully logged in");
                    res.render("index");
              })
            }
          });
    });

module.exports = signInRouter;