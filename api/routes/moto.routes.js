const express = require('express')

const router = express.Router()

// [{id:1,label:'',price:5555}]
let motos=[]

router.get('/all',function(req,res,next){

    res.json(motos)

})

router.post('/add',function(req,res,next){
    const moto = req.body;
    motos.push(moto)
    res.json(motos)
})

router.put('/update/:motoId',function(req,res,next){
    const motoId=Number(req.params.motoId);
    const newMoto = req.body

    motos = motos.map(function(moto){
        if(moto.id===motoId){
            moto.label=newMoto.label,
            moto.price=newMoto.price
        }
        return moto
    })
    res.json(motos)
    
})
router.delete('/delete/:motoId',function(req,res,next){
    const motoId=Number(req.params.motoId);
    motos = motos.filter(moto=>moto.id !==motoId)
    res.json(motos)
})




module.exports=router