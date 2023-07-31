const mongoose = require('mongoose')
const User = require('./user.model')


const PostSchema = new mongoose.Schema({
    postDate: {
        type: Date,
        required: true
    },
    post_image: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            comment: { type: String }
        }
    ],
    likes: { type: Number },
},
    { timestamps: true }
)

module.exports = mongoose.model("Order", PostSchema)