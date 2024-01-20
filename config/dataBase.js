const mongoose =  require('mongoose')


// building connection to the database

const connetToDb =  async () =>{
mongoose.connect(process.env.MONGO_URL)
.then((conn) =>{
    console.log(`Database connected to ${conn.connection.host}`)

})
.catch((err) =>{
    console.log(err.message)
    process.exit(1)
})

}


module.exports = connetToDb