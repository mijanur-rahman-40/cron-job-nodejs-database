const Post = require('../models/Post');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');

exports.getAllPosts = () => {
   
};

const users = [
    {
        id: 0,
        name: 'John Doe',
        role: 'Admin',
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
        id: 2,
        name: 'Mijanur Rahman',
        role: 'User',
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
        id: 3,
        name: 'Masud Rana',
        role: 'Admin',
        profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
        id: 4,
        name: 'Rahim Uddin',
        role: 'User',
        profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    }
];

exports.createPost = (request, response, next) => {

    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        taskName: request.body.taskName,
        category: request.body.category,
        description: request.body.description,
        user: users[Math.floor(Math.random() * users.length)]
    });

    post.save()
        .then(post => {
            response.status(201).json({ message: 'Post added successfully' })
        })
        .catch(err => {
            console.log(err);
            response.status(500).json({ message: 'Post not added successfully' })
        });
};




