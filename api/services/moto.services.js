const Moto = require('../models/moto.model')

const addMotoToCatalog =async (label,brand,description,price)=>{
  const result = await Moto.create({label,brand,description,price})
  return result
}

const getAllMotos =async()=>{
    const allMotors= await Moto.find()
    return allMotors;
}

const updateMoto = ()=>{}

const removeMoto = ()=>{

}

module.exports={
    addMotoToCatalog,
    getAllMotos,
    updateMoto,
    removeMoto
}