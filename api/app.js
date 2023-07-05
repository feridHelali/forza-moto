const express=require('express')
const motorRouter = require('./routes/moto.routes')
const cors=require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/motor',motorRouter)




module.exports=app