const mongoose = require("mongoose");


// prepearing user database schema with three architecture name, email and password
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxLength: [20, "Name character must be less than 20 char"],
        trim: true
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique: true

    },
    password:{
        type:String,
        required: true,
        trim: true,
        minLength: [4, "password length must be greater then 4 char"]

    }
})

module.exports = mongoose.model("User", userSchema)