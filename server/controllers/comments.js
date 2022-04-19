import mongoose from "mongoose"
import Comment from '../models/commentContent'
import Reply from '../models/replyContent'

export const fetchComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}