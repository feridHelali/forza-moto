const express=require('express')
const motorbikeRouter = require('./routes/motorbike.routes')
const userRouter = require('./routes/user.route')
const orderRouter = require('./routes/order.routes')
const followingRouter = require('./routes/social/following.routes')

const cors=require('cors')
const morgan = require('morgan')
const rfs = require("rotating-file-stream");

const path = require('path')

const stream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
});



const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(morgan('combined', { stream: stream }))



app.use('/motor',motorbikeRouter)
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/following',followingRouter)
app.use('/uploads', express.static('uploads'))


app.use((error,req,res,next)=>{
    if(error.Type)
    res.status(500).json({Error:`500 Server Error ${error.message}`});
})


module.exports=app


