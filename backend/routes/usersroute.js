const express = require('express');
const {User} = require('../models/appmodel')

const router = express.Router();

//Post Method
router.post('/createuser', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
})

//Get all Method
router.get('/getusers', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

//Get by ID Method
router.get('/getoneuser/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
})

//Update by ID Method
router.put('/updateuser/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
})

//Delete by ID Method
router.delete('/deleteuser/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
})

module.exports = router;