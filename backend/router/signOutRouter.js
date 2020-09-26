const express = require("express");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const signOutRouter = express.Router();

////////////////////----- Route for sign out -----////////////////////

signOutRouter.route("/")
  .get( (req, res) => {
        req.logout();
    res.send("Successfully logged out");
  })

////////////////////----- Export sign out  router -----////////////////////

module.exports = signOutRouter;
