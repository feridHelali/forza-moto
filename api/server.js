require('dotenv').config()
const http=require('http')
const app=require('./app')
const db = require('./config/db')

db.connect()

const PORT = process.env.PORT || 3000;

const server = http.createServer(app)

server.listen(PORT,()=>{
    console.log(`API running on http://localhost:${PORT}`)
})