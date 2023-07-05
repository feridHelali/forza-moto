const express=require('express')
const motorbikeRouter = require('./routes/motorbike.routes')
const cors=require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/motor',motorbikeRouter)




module.exports=app