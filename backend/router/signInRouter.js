const express = require("express");
const signInRouter = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

signInRouter.route("/")
    .get( (req, res) => {
        res.send("sign in page");
    })
    .post( (req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
          });
          req.login(user, function (err) {
            if (err) {
              console.log(err);
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.send("Successfully logged in");
              })
            }
          });
    });

module.exports = signInRouter;