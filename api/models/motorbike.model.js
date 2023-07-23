const mongoose = require('mongoose')

const MotorbikeSchema=new mongoose.Schema({
        label:{
            type: String,
            required: [true,'label is required']
        },
        brand:{
            type: String,
            required: [true,'label is required']
        },
        description:{
            type: String,
            default : ''
         
        },
        photos_url:Array,
        cover_url:
        {
            type:String,
            default:"uploads/default.png"
        } ,
        price:{
            type:Number
        },

},{
    timestamps:true
})

module.exports = mongoose.model('Motorbike',MotorbikeSchema)

