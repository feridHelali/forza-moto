const mongoose = require('mongoose')

const connect = () => mongoose.connect(process.env.MONGODB || 'mongodb://127.0.0.1:27017/motor_db')
    .then(
        () => {
            console.log('Successfully connected to DB')
        }
    )
    .catch(
        (error) => {
            console.error('Error DB :', error)
        }
    )

module.exports = {
    connect
}