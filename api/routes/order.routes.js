const router=require('express').Router()
const verifyToken = require('../middleware/authentication.middleware');
const isAdmin = require('../middleware/isAdmin')
const orderService = require('../services/order.service')



router.post('/add',verifyToken,async (req,res)=>{
    const userId = req.user.user_id
    const {details}=req.body;
    try {
        const result = await orderService.order(new Date(),userId,details)
        res.status(201).json({message:"Order added successfully",data:result})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/all',verifyToken,isAdmin,async (req,res)=>{
    try {
        const result = await orderService.getAllOrders()
        res.status(200).json({message:"All Orders",data:result})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/my-orders',verifyToken,async (req,res)=>{
    const userId=req.user.user_id

    try {
        const result = await orderService.getMyOrders(userId)
        res.status(200).json({message:"Your Orders",data:result})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})




module.exports=router;