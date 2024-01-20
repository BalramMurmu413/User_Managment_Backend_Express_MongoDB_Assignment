const {json} = require('express')
const User = require('../model/userModel.js')

exports.home = (req, res) =>{
    res.send(" Hellow! Welcome to Pw Skills")
}

exports.getUser = async (req, res) =>{
try {

    const listUser =  await User.find({})
    res.status(200).json({
        success : true,
        message: "Here is the list of all users",
        listUser
    })


} catch (error) {
    console.log(error.message)
    res.status(400).json({
        success: false,
        message: 'Failed to Get User'
    })
}

}

exports.registerUser = async (req, res) =>{

    //  User Registration Name Email Password Validation
    try {
 const {name, email, password } = req.body
 if(!name || !email|| !password){
     throw new Error("all input field are required !")
    }
    
     const userExist = await User.findOne({email})
     if(userExist){
        throw new Error("User already Exist")
     }



const user = await  User.create({ 
        name,     
        email,
        password
 })


         res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            user
    
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message: "User Registration Failed"
        })
    }
}

exports.login = async (req, res) =>{

    try{
//  User Email and Password Validation 
        
    const {email, password} = req.body
    const userExist = await User.findOne({email})
    const checkP = await User.findOne({password})


if(!email || !password){
    throw new Error(" all input field are required")
}else if ( !userExist){
   throw new Error("No account associate with this email")
}else if(req.password == checkP){
    throw new Error("Password is Wrong! ")

}
res.status(200).json({
    success: true,
    message : "User Login Successfully",
    
})


}catch(error){
    console.log(error.message)
    res.status(400).json({
        success:false,
        message: "Failed to Login"
    })

}


}

// Error handing route if user entered some other keyword
exports.otherKeyWord = (req, res) =>{
        res.send(" Ohh! there nothing of your match try =>  getuser, login and register, ")
}