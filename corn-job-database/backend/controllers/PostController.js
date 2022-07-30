const Post = require('../models/Post');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');

exports.getAllPosts = () => {
   
};

exports.createPost = (request, response, next) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        taskName: request.body.taskName,
        category: request.body.category,
        description: request.body.description,
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




