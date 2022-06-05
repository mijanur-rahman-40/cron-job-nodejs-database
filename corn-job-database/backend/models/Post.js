const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    taskName: {
        type: String,
        default: '',
    },
    category: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post;