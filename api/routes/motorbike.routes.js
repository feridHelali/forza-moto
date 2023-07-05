const express = require('express')
const motorbikeService = require('../services/motorbike.services')

const router = express.Router()



router.get('/all',async function(req,res,next){
 try {
    const result = await motorbikeService.getAllMotorbikes()
    res.status(200).json(result)
 } catch (error) {
    res.status(404).json({error:error})
 }


})

router.post('/add',async function(req,res,next){
    const motor = req.body;
    try {
        const result = await motorbikeService.addMotorbikeToCatalog(
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

router.put('/update/:id',function(req,res,next){
   
    res.json({message:':) to implement'})
    
})
router.delete('/delete/:id',function(req,res,next){
    res.json({message:':) to implement'})
})




module.exports=router