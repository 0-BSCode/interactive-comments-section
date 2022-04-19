import mongoose from 'mongoose'
import data from '../data.js'

export const replySchema = mongoose.Schema({
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

const Reply = mongoose.model('Reply', replySchema)

export default Reply