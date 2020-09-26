const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require("passport-local-mongoose");

////////////////////----- Student Schema -----////////////////////

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }],
    role: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("User", userSchema);
