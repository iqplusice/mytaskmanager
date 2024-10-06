const express = require('express');
const User = require('../models/appmodel')

const router = express.Router();

//Post Method
router.post('/createuser', (req, res) => {
    User.create(req.body).then(() => {
        res.send('User is inserted');
    }) 
    //res.send('Post User API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All User API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get User by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update User by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete User by ID API')
})

module.exports = router;