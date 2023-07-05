const express = require('express')
const motoService = require('../services/moto.services')

const router = express.Router()



router.get('/all',async function(req,res,next){
 try {
    const result = await motoService.getAllMotos()
    res.status(200).json(result)
 } catch (error) {
    res.status(404).json({error:error})
 }


})

router.post('/add',async function(req,res,next){
    const motor = req.body;
    try {
        const result = await motoService.addMotoToCatalog(
            motor.label,
            motor.brand,
            motor.description,
            motor.price
            )
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error:error})
    }
   
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