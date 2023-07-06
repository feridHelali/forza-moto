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
    const motorbike = req.body;
    try {
        const result = await motorbikeService.addMotorbikeToCatalog(
            motorbike.label,
            motorbike.brand,
            motorbike.description,
            motorbike.price
            )
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error:error})
    }
   
})

router.put('/update/:id',async function(req,res,next){
    const id = req.params.id
    const {label,brand,description,price}=req.body;

    try {
        const result = await motorbikeService.updateMotorbike(id,label,brand,description,price)
        return res.status(201).json(result)
    } catch (error) {
        res.status(404).json({error:error})
    }
    
})

router.delete('/delete/:id',function(req,res,next){
    res.json({message:':) to implement'})
})




module.exports=router