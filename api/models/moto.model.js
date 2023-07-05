const mongoose = require('mongoose')

const MotoSchema=new mongoose.Schema({
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
        price:{
            type:Number
        },

},{
    timestamps:true
})

module.exports = mongoose.model('Moto',MotoSchema)

