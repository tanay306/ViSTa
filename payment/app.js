require('dotenv').config();
const express = require("express");
const stripe = require("stripe");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/charge", (req, res) => {
    const amount = 2500;
    res.render("success")
})

app.listen(3000, function () {
    console.log("Server has statrted on port 3000");
});
  