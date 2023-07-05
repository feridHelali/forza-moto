const http=require('http')
const app=require('./app')
const db = require('./config/db')

db.connect()

const server = http.createServer(app)

server.listen(3000,()=>{
    console.log("API running")
})