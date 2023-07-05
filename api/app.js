const express=require('express')
const motoRouter = require('./routes/moto.routes')
const cors=require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/moto',motoRouter)




module.exports=app