const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (fullName, email, password) => {
    const oldUser = await User.findOne({ email })

    if (oldUser) {
       throw new Error('User Already exist')
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        fullName,
        email,
        password: encryptedPassword
    });
    const result = await newUser.save();
    return  (result);
}

const login = async (email, password) => {
    const user = await User.findOne({ email });

    const passwordCompare = bcrypt.compareSync(password, user.password);
    if (user && passwordCompare) {
        const token = jwt.sign(
            { user_id: user._id, email: user.email, role: user.role }, process.env.SECRET_KEY || 'BLABLA', { expiresIn: "1d" }
        )
        return ({...user._doc, token: token })
    } else 
    throw  Error("Invalid Credentials")
}

const getAllUsers = async () => {
    const users = await User.find({});
    return formatResponse('Success', 'All Users', users)
}

module.exports = {
    register,
    login,
    getAllUsers
}