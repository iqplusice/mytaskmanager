const express = require('express');
const {Task} = require('../models/appmodel')

const router = express.Router();

//Post Method
router.post('/createtask', (req, res) => {
    User.create(req.body).then(() => {
        res.send('Task is inserted');
    })
})

//Get all Method
router.get('/gettasks', (req, res) => {
    res.send('Get All Task API')
})

//Get by ID Method
router.get('/getonetask/:id', (req, res) => {
    res.send('Get Task by ID API')
})

//Update by ID Method
router.patch('/updatetask/:id', (req, res) => {
    res.send('Update Task by ID API')
})

//Delete by ID Method
router.delete('/deletetask/:id', (req, res) => {
    res.send('Delete Task by ID API')
})

module.exports = router;