import mongoose from "mongoose"
import Comment from '../models/commentContent.js'
import Reply from '../models/replyContent.js'

export const fetchComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const addComment = async (req, res) => {

    const comment = req.body
    const newComment = new Comment(comment)

    try {
        await newComment.save()
        res.status(201).json(newComment)
        console.log(newComment)
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}