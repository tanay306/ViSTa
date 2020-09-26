const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require("./utils/user");
const mongoose = require("mongoose")

const app = express();
const server = http.createServer(app);
const io = socketio(server);



//set static folder
app.use(express.static(path.join(__dirname, "public")));

const botname = "WhatsOn Bot";

//run when a client connects
io.on("connection", socket => {
    // console.log("new connection");

    socket.on("joinRoom", ({username, room}) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        //welcome current user
        socket.emit("message", formatMessage(botname, "Welcome to WhatsOn!"));

        //broadcast when a user connects
        socket.broadcast.to(user.room).emit("message", formatMessage(botname,  `${user.username} has joined the chat`));

        //send room info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    })


    //listen for chat messages
    socket.on("chatMessage", (msg) => {
        // console.log(msg);
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    //runs when client disconnects
    socket.on("disconnect", () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit("message", formatMessage(botname, `${user.username} has left the chat`));
            io.to(user.room).emit("roomUsers", {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
        
    })

});

server.listen(3000, function () {
    console.log("Server has statrted on port 3000");
});