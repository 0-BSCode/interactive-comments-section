import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import commentRoutes from './routes/comments.js'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/comments', commentRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to the API!")
})

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`App is running on port ${PORT}`)))
    .catch(e => console.log(e.message))