const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const bodyParser= require("body-parser");
const ejs = require("ejs");
const Course = require("./models/course");


/////--engine setup--/////

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "tanay",
  resave: false,
  saveUninitialized: false,
}));
app.set('view engine', 'ejs');

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
const course = require("./models/course");

app.use("/signIn", signInRouter);
app.use("/signOut", signOutRouter);
app.use("/signUp", signUpRouter);
app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("is auth");
        console.log(req.user._id);
    } else {
        res.send("not auth")
    }
})
app.get("/myCourses", async (req, res) => {
  if (req.isAuthenticated()){
    const course = await Course.find().populate("courses");
    res.send(course)
  } else {
    res.render("/signIn")
  }
})
app.get("/addCourse", (req, res)=>{
  if (req.isAuthenticated()) {
    res.render("addCourse");
  } else {
    res.render("signIn");
  }
});
app.post("/addCourse", (req, res) => {
  if (req.isAuthenticated()) {
    const username = req.body.username;
    if (req.user.role == "instructor") {
      const newCourse = new Course({
        username,
        instructor: req.user._id,
      });
      newCourse.save(function(err) {
        if (err) {
          console.log(err);
        } else {
          res.send("success")
        }
      })
    }
    if (req.user.role == "student") {
      Course.find({username: username}, function(err, foundCourse){
        if (err) {
          console.log(err);
        } else {
          User.update({username: req.user.username}, {$push: {courses: foundCourse}});
          res.send("success")
        }
      })
    }
  }
})
app.get("/allcourse", async (req, res) => {
  const courses = await Course.find().populate();
  const allCourse = [];
  courses.forEach(course => {
    allCourse.push(course.username)
  });
  res.send(allCourse)
})

app.put("/courses/:courseId", async (req, res) => {
  if (req.isAuthenticated() && req.user.role == "admin") {
    const course = await Course.findByIdAndUpdate(req.params.courseId, {$set: req.body}, {new: true});
  res.send(course);
  } else {
    res.send("Restricted access")
  } 
})

app.put("/user/:userId", async (req, res) => {
  if (req.isAuthenticated() && req.user.role == "admin") {
    const user = await User.findByIdAndUpdate(req.params.courseId, {$set: req.body}, {new: true});
    res.send(user);
  } else {
    res.send("Restricted access")
  }
});

app.get("/courses/:courseId", async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  res.send(course.quiz1);
  //json parse se nahi hogaa
});
app.get("/course/:courseId", async (req, res) => {
    const course = await Course.findById(req.params.courseId).populate();
    res.send(course);
})



/////--Server has started message--/////

app.listen(3000, () => {
    console.log("Server has statrted on port 3000");
  });
  
