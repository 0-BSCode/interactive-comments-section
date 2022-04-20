import express from 'express'
import { fetchComments, addComment, updateComment, deleteComment } from '../controllers/comments.js'
const router = express.Router()

router.get('/', fetchComments)
router.post('/', addComment)
router.patch('/:id', updateComment)
router.delete('/:id', deleteComment)

export default router