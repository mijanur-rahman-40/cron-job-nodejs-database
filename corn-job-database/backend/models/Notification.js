const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
    isSeen: {
        type: Boolean,
        default: false,
    },
    postData: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post',
        index: true
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
})

const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification;