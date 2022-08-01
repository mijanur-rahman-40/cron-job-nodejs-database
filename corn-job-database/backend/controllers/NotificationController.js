const Post = require('../models/Post');
const mongoose = require('mongoose');
const Notification = require('../models/Notification');
const webpush = require('web-push');

webpush.setVapidDetails(
    "mailto: `mijanurrahman31416@gmail.com`",
    "BO6UamlX43wr_O-SDbjp0YSr4saa7JgfoUctxkA5JktfgyUVUoydRdsdjtjZkLgIlC_l3V3tya3EPNVOLh-kQ-g",
    "YfVF3xxuAgMBZlw2EFOJGZCm3YI5ivo-fhCiJluFa2o"
);


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


exports.subscribe = (request, response) => {
    console.log(request.body);

    const payload = JSON.stringify({
        title: request.body.title,
        description: request.body.description,
        icon: request.body.icon
    })
    console.log(request.body.subscription);


    webpush.sendNotification(request.body.subscription, payload)
        .then(result => console.log())
        .catch(e => console.log(e.stack))

    response.status(200).json({ 'success': true })
}

exports.sendNotification = () => {

    const payload = JSON.stringify({
        title: 'request.body.title',
        description: 'request.body.description',
        // icon: request.body.icon
    })

    const subscription = {
        endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABi55v3uDX8TYMImjn5LBv0Gyk7Wt9FHbEtslbVT4MQEz3zUvq9zepidf8xaxy-2AokKjfhC7mxXhNp0Y-UBYoGNDcHiCata0V3ljnTwbvBgtzRXsrfPQVvPp3twwz1j9PEa7vFGIJbIKHehCxQ2Uer7femTPaZ8wwa0h-3_3W1kkClUYM',
        expirationTime: null,
        keys: {
            auth: 'U3uIACaggP0hZbTqxKv0aQ',
            p256dh: 'BDEByznxAMhpTE-0A4oVWHtaKIqfEifY44Cd__rspJFfUdNXvd058s9FUYVrPEGBFNE68LyYDxh7_mw2iEq-BeU'
        }
    };

    webpush.sendNotification(subscription, payload)
        .then(result => console.log())
        .catch(e => console.log(e.stack))
}






