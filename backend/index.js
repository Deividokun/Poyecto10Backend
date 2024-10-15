require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const librosRouter = require('./src/api/routes/libro')
const usersRouter = require('./src/api/routes/user')
const cors = require('cors')

const app = express()

connectDB()

app.use(express.json()) // recordar que esto para interpretar formatos de tipo json para insmonia para los post etc..
app.use(cors())
app.use('/api/v1/libro', librosRouter)
app.use('/api/v1/user', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
