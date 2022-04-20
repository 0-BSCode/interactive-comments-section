import mongoose from "mongoose"
import Comment from '../models/commentContent.js'

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
    } catch (e) {
        console.log(e)
        res.status(409).json({message: e.message})
    }
}

export const updateComment = async (req, res) => {
    const incomingComment = req.body

    if (!mongoose.Types.ObjectId.isValid(incomingComment._id)) return res.status(404).send("No comment with that ID!")

    const updatedComment = await Comment.findByIdAndUpdate(incomingComment._id, {...incomingComment}, {new: true})
    res.json(updatedComment)
}

export const deleteComment = async (req, res) => {
    const {id: _id} = req.params
    console.log(_id)
}