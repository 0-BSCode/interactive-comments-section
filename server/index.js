import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("HELLO, WORLD!")
})

const PORT = 5000

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))