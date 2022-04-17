import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send("Welcome to replies!"))
export default router