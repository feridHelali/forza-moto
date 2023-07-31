const http = require('http')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { body,validationResult, ValidationChain } = require('express-validator');


mongoose.connect('mongodb://127.0.0.1:27017/my_db')
    .then(() => {
        console.log('Successfully connected to db')
    }).catch(error => {
        console.log('Failed to Connect to Db ', error.message)
    })


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    city: { type: String }
})

const User = mongoose.model('User', userSchema)

const orderSchema = new mongoose.Schema({
    orderSate: { type: Date, default: new Date() },
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    details: [],
    status: { type: String, default: 'Pending' }
})

const Order = mongoose.model('Order', orderSchema)

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const validate = validations => {
    return async (req, res, next) => {
      for (let validation of validations) {
        const result = await validation.run(req);
        if (result.errors.length) break;
      }
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      res.status(400).json({ errors: errors.array() });
    };
  };


app.post('/user',validate([
    body('fullName').isLength({min:5,max:50}),
    body('address').optional(),
    body('city').isLength({min:4,max:12})
]) ,async (req, res, next) => {
     const {fullName,address,city} = req.body
    const result = await User.create({ fullName, address, city })
    res.status(201).json(result)

})

app.get('/user', async (req, res, next) => {

    const result = await User.find({})
    res.status(201).json(result)

})
app.post('/order', async (req, res, next) => {
    const { user, details } = req.body
    const result = await Order.create({ user, details })
    res.status(201).json(result)

})
app.get('/order', async (req, res, next) => {
    const result = await Order.find({}).populate({ path: 'user', select: 'fullName address city' })
    res.status(200).json(result)
})


const server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server listening on http://localhost:5000')
})