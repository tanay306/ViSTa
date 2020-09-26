const express = require("express");
const signUpRouter = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

signUpRouter.route("/")
    .get( (req, res) => {
        // res.send("page of signup")
        res.render("signUp");
    })
    .post( (req, res) => {
        if (req.isAuthenticated()){
            res.send("User " +req.user.username+ " is already logged in");
        } else {
            User.register( {username: req.body.username, role: req.body.role}, req.body.password, (err, user) => {
                if (err) {
                    // res.send("User not registered");
                    console.log(err);
                    res.render("signIn")
                } else {
                    passport.authenticate("local")(req, res, () => {
                        // res.send("User registered");
                        res.render("index");
                    })
                }
            });
        }
    }); 

module.exports = signUpRouter;