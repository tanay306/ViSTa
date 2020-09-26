const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const signOutRouter = express.Router();
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

////////////////////----- Route for sign out -----////////////////////

signOutRouter.route("/")
  .get( (req, res) => {
        req.logout();
    // res.send("Successfully logged out");
        res.render("signIn");
  })

////////////////////----- Export sign out  router -----////////////////////

module.exports = signOutRouter;
