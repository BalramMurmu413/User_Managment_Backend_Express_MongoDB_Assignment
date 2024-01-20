const express = require('express')
const app = express()
const connetToDb = require('./config/dataBase.js')

// envoking database 
connetToDb()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
const userRouter = require('./route/userRoute.js')

app.use('/', userRouter)
module.exports = app;