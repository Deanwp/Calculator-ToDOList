const express = require('express')

const router = express.Router()

const { getTasks, addTask, getTask, deleteTask } = require('../controllers/task')


router.get('/tasks', getTasks)
// router.post('/task', addTask)
// router.get('/task/:id', getTask)
// router.delete('/task/:id', deleteTask)

module.exports = router