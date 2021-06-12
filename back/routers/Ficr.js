const User = require('../models/Ficr')

const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const user = await User.find()
        res.json({
            user
        })
    } catch (err) {
        res.json({
            sucess: false,
            data: err
        })
    }
})

router.get('/:id', async(req, res) => {
    try {
       const user = await User.findById({ _id: req.params.id })
        res.json({
            sucess: true,
            data: user
        })
    } catch (err) {
        res.json({
            sucess: false,
            data: err
        })
    }
})

// criar bike
router.put('/create-bike', async(req, res) => {
    try {
        const saveBike = await User.updateOne({
            _id: req.body.id_user
        }, {
            $set: {
                bikes: {
                    model: req.body.model,
                    year: req.body.year,
                    frame: req.body.frame,
                    montain: req.body.montain,
                    available: req.body.available,
                    value: req.body.value,
                }
            }
        })
        res.json({
            status: true,
            data: saveBike
        })
    } catch (err) {
        res.json({
            status: false,
            message: err
        })
    }
})

// mudar status
router.put('/availabe-request', async(req, res) => {
    try {
        const saveBike = await User.updateOne({
            _id: req.body.id_user
        }, {
            $set: {
                bikes: {
                    available: false,
                }
            }
        })
        res.json({
            status: true,
            data: saveBike
        })
    } catch (err) {
        res.json({
            status: false,
            message: err
        })
    }
})

// solicitar bike
router.put('/request-bike', async(req, res) => {
    try {
        const saveBike = await User.updateOne({
            _id: req.body.id_user
        }, {
            $set: {
                requests: {
                    user: req.body.user,
                    date_request: req.body.date,
                    available: false,
                }
            }
        })
        res.json({
            status: true,
            data: saveBike
        })
    } catch (err) {
        res.json({
            status: false,
            message: err
        })
    }
})

module.exports = router