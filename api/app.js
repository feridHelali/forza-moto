const express=require('express')
const motorbikeRouter = require('./routes/motorbike.routes')
const userRouter = require('./routes/user.route')
const cors=require('cors')
const morgan = require('morgan')


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))



app.use('/motor',motorbikeRouter)
app.use('/user',userRouter)


app.use((error,req,res,next)=>{
    res.status(500).json({
        message:error
    })
    next()
})


module.exports=app


