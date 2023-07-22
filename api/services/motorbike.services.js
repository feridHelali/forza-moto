const Motorbike = require('../models/motorbike.model')

const addMotorbikeToCatalog = async (label, brand, description, price) => {
  const result = await Motorbike.create({ label, brand, description, price })
  return result
}

const getAllMotorbikes = async () => {
  const allMotors = await Motorbike.find()
  return allMotors;
}

const getMotorbikeById = async(id)=>{
  const result = await Motorbike.findOne({_id:id})
  return result;
  
}

const updateMotorbike = async (id,label,brand,description,price) => {
  const result = await Motorbike.updateOne({_id:id},{$set:{label,brand,description,price}})
  return result;
 }

const removeMotorbike = async (id) => {
  const result = await Motorbike.deleteOne({_id:id})
  return result;
}

module.exports = {
  addMotorbikeToCatalog,
  getMotorbikeById,
  getAllMotorbikes,
  updateMotorbike,
  removeMotorbike
}