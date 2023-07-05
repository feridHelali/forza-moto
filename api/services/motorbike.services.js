const Motorbike = require('../models/motorbike.model')

const addMotorbikeToCatalog = async (label, brand, description, price) => {
  const result = await Motorbike.create({ label, brand, description, price })
  return result
}

const getAllMotorbikes = async () => {
  const allMotors = await Motorbike.find()
  return allMotors;
}

const updateMotorbike = async (id) => { }

const removeMotorbike = () => {

}

module.exports = {
  addMotorbikeToCatalog,
  getAllMotorbikes,
  updateMotorbike,
  removeMotorbike
}