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

MotorbikeSchema.index({name: 'text', 'label': 'text','brand':'text','description':'text'});

module.exports = mongoose.model('Motorbike',MotorbikeSchema)

