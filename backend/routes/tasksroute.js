const express = require('express');
const {Task} = require('../models/appmodel')

const router = express.Router();

//Post Method
router.post('/createtask', async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
})

//Get all Method
router.get('/gettasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
})

//Get by ID Method
router.get('/getonetask/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    res.json(task);
})

//Update by ID Method
router.put('/updatetask/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.update(req.body);
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
})

//Delete by ID Method
router.delete('/deletetask/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
})

module.exports = router;