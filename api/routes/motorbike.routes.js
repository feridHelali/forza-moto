const express = require('express')
const motorbikeService = require('../services/motorbike.services')
const isAuthenticated = require('../middleware/authentication.middleware') 
const Motorbike = require('../models/motorbike.model')
const {motorbikeCoverUpload} =require('../middleware/multer')

const router = express.Router()



router.get('/all', async function (req, res, next) {
    console.log(req.message)
    try {
        const result = await motorbikeService.getAllMotorbikes()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error })
    }


})

router.get('/one/:id', async function (req, res, next) {
    const id = req.params.id;
    try {
        const result = await motorbikeService.getMotorbikeById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error })
    }


})

router.post('/add', isAuthenticated ,async function (req, res, next) {
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
        console.log(error.message)
        res.status(404).json({ error: error })
    }

})

router.put('/update/:id', async function (req, res, next) {
    const id = req.params.id
    const { label, brand, description, price } = req.body;

    try {
        const result = await motorbikeService.updateMotorbike(id, label, brand, description, price)
        if (result.acknowledged && result.modifiedCount === 1) {
            return res.status(201).json({ message: "Motorbike updated successfully", result })
        } else {
            return res.status(404).json({ message: "Sorry operation failed", result })
        }
    } catch (error) {
        res.status(404).json({ error: error })
    }

})

router.delete('/delete/:id', async function (req, res, next) {
    const id = req.params.id;
    try {
        const result = await motorbikeService.removeMotorbike(id)
        if (result.acknowledged && result.deletedCount === 1)
            return res.status(201).json({ message: "Motorbike removed successfully", result })
        else
            return res.status(404).json({ message: "Sorry operation failed", result })
    } catch (error) {
        res.status(404).json({ error: error })
    }

})

// upload motorbike photo
router.put('/upload/:id', async (req, res, next) => {
    await motorbikeCoverUpload(req, res, async (error) => {
        if (error) {
            res.status(500).json({ error: error.message })
        }
        try {
            const uploadedCover = req.file;
            const coverUrl = 'uploads/' + uploadedCover.filename
            const result = await Motorbike.findByIdAndUpdate(req.params.id, { cover_url: coverUrl })
            res.json(result)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
}
)




module.exports = router