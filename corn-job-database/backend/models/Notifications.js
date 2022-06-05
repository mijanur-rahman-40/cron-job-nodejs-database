const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
    isSeen: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        default: '',
    },
    info: {
        type: Object,
        default: {},
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