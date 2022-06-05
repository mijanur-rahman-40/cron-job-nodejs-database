const Post = require('../models/Post');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');

exports.getAllPosts = () => {
    const currentDate = new Date();
    const date = new Date();

    date.setDate(date.getDate() - 10);

    Post.find({ createdAt: { $gte: date, $lte: currentDate } })
        .select('_id')
        .then(posts => {
            const newNotifications = [];
            posts.map(post => {
                newNotifications.push({
                    postData: post._id,
                    isSeen: false,
                    createdAt: new Date(),
                });
            });

            Notification.insertMany(newNotifications)
                .then(notifications => { 
                    console.log(notifications);
                })
        })
        .catch(err => {
            console.log(err);
        });
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




