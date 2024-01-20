const express = require('express')

// importing controllers 
const {home , createUser, getUser, registerUser, login , otherKeyWord}  = require('../controller/userController.js')
const route = express.Router()


// list of routing for getting, registraion, login user.
route.get('/' , home)
route.post('/register' , registerUser)
route.post('/login' , login)
route.get('/getuser' , getUser)

// this route for error handling if user entered other keyword
route.get('/:username' , otherKeyWord)


module.exports = route;




