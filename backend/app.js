const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const bodyParser= require("body-parser");

/////--engine setup--/////

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "tanay",
  resave: false,
  saveUninitialized: false,
}));

/////--initializing and passport session--/////

app.use(passport.initialize());
app.use(passport.session());

/////--connecting with mongoDB--/////

mongoose.connect("mongodb://localhost:27017/elearnDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
mongoose.set("useCreateIndex", true);

/////--passport serialize and deserialize user--/////

const User = require("./models/user");
passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

const signInRouter = require("./router/signInRouter");
const signUpRouter = require("./router/signUpRouter");
const signOutRouter = require("./router/signOutRouter");

app.use("/signIn", signInRouter);
app.use("/signOut", signOutRouter);
app.use("/signUp", signUpRouter);
app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("is auth");
    } else {
        res.send("not auth")
    }
})


/////--Server has started message--/////

app.listen(3000, () => {
    console.log("Server has statrted on port 3000");
  });
  
