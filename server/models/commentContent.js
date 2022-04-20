import mongoose from 'mongoose'
import data from '../data.js'

const replySchema = mongoose.Schema({
    id: Number,
    content: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    score: {
        type: Number,
        default: 0
    },
    replyingTo: String,
    user: {
        image: {
            png: {
                type: String,
                default: data.currentUser.image.png
            },
            webp: {
                type: String,
                default: data.currentUser.image.webp
            }
        },
        username: {
            type: String,
            default: data.currentUser.username
        }
    }
})

const commentSchema = mongoose.Schema({
    id: Number,
    content: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    score: {
        type: Number,
        default: 0
    },
    user: {
        image: {
            png: {
                type: String,
                default: data.currentUser.image.png
            },
            webp: {
                type: String,
                default: data.currentUser.image.webp
            }
        },
        username: {
            type: String,
            default: data.currentUser.username
        }
    },
    replies: [replySchema]
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment