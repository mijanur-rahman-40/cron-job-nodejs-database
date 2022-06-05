const Post = require('../models/Post');
const mongoose = require('mongoose');

exports.getAllPosts = (request, response, next) => {
    const currentDate = new Date();
    const date = new Date();
    
    date.setDate(date.getDate() - 3);

    Post.find({ createdAt: { $gte: date, $lte: currentDate } })
        .then(posts => {
            console.log(posts);
            response.status(201).json({ posts })
        })
        .catch(err => {
            console.log(err);
            response.status(500).json({ message: 'Post not added successfully' })
        })
};

exports.createPost = (req, res, next) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        taskName: req.body.taskName,
        category: req.body.category,
        description: req.body.description,
    });

    post.save()
        .then(post => {
            res.status(201).json({ message: 'Post added successfully' })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Post not added successfully' })
        });
};




