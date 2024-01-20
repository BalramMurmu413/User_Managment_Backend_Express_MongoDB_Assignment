require('dotenv').config()
const server = require('./app.js')
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>{
    console.log(`Server is started at port http://localhost: ${PORT}...`)
})