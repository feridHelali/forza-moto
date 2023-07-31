const User = require('../../models/user.model')

const getNewFollowees=async(userId)=>{
  const me = await User.find({_id})
  const oldFollowees=me.followees;

  const result = await User.find({})

  //TODO: to implement getNewFollowees
}


module.exports={
    getNewFollowees
}