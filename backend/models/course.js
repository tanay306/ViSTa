const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require("passport-local-mongoose");

////////////////////----- Project Schema -----////////////////////

const courseSchema = new mongoose.Schema({
    username : {
        type: String,
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    instructor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    price: {
        type: String,
    },
    quiz1Marks: {
        type: Number
    },
    quiz2Marks: {
        type: Number
    }
});

courseSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("Course", courseSchema);