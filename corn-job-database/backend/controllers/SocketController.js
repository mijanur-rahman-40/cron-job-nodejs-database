const Post = require('../models/Post');
const mongoose = require('mongoose');


const connectedUsers = [];

const addNewUser = ({ connectionId }) => {
    if (!connectionId) return { error: 'Connection id is required.' };

    const user = {  connectionId};
    connectedUsers.push(user);

    return { user };
}

exports.joinSocket = (socket) => {
    console.log(`${ socket.id }: connected`);
    socket.on('join', ({ connectionId }, callback) => {
        
        // adding room to the user
        socket.join(connectionId);

        socket.to(connectionId).emit('roomData', {
            user:'user'
        });
    });

    socket.on("disconnect", ({ }, callback) => {
        console.log('disconnected successfully');
    });

};




