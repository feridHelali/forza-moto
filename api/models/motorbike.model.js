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
            default:"https://purepng.com/public/uploads/large/purepng.com-bmw-r1200gs-adventurebmwmotorcyclemotorbikebikevehicle-981525166898rvvit.png"
        } ,
        price:{
            type:Number
        },

},{
    timestamps:true
})

module.exports = mongoose.model('Motorbike',MotorbikeSchema)

