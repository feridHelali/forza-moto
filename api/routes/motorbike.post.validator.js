const {check} = require('express-validator');


const postMotorbikeValidator = [
    check('label','Label must not be empty').trim().isLength({min:10, max:80}),
    check('brand','Brand must not be empty').trim().isLength({min:10, max:80}),
    check('brand','Brand must not be empty').trim(),
    check('price','Price required').isNumeric()
]



module.exports={
    postMotorbikeValidator
}