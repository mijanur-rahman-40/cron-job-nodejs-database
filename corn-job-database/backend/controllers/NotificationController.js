const Post = require('../models/Post');
const mongoose = require('mongoose');
const Notification = require('../models/Notification');


exports.postNotifications = () => {
    const currentDate = new Date();
    const date = new Date();

    // date.setDate(date.getDate() - 10);
    date.setMinutes(date.getMinutes() - 2);

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

exports.getAllNotifications = (request, response, next) => {

    Notification.find({})
        .populate('postData')
        .select('-__v')
        .then(notifications => {
            response.status(200).json(notifications);
        })
        .catch(err => {
            console.log(err);
            response.status(200).json({ message: err.message });
        });
};






