const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('short'))

let users=[]


app.post('/users',(req,res,next)=>{
    users.push(req.body)
    res.json({users:users})

})

app.get('/users',(req,res,next)=>{
    res.json(users)
})


module.exports=app