//TODO: get all users except me and followees

const verifyToken = require('../../middleware/authentication.middleware');
const { getNewFollowees } = require('../../services/social/following.service');

const router=require('express').Router()

router.get('/get_new_followees',verifyToken,async(req,res,next)=>{
    const result = await getNewFollowees()
    res.json(result)
})

module.exports=router;