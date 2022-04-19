import express from 'express'
import { fetchComments, addComment } from '../controllers/comments'
const router = express.Router()

router.get('/', fetchComments)
router.post('/', addComment)

export default router