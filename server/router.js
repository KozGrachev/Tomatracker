const router = require('express').Router();
const { getTasks, createTask, deleteTask, updateTask } = require('./tasks.controller');

module.exports = router.get('/tasks', getTasks);

module.exports = router.post('/tasks', createTask);

module.exports = router.delete('/tasks/:id', deleteTask);

module.exports = router.put('/tasks/:id/:property/:value', updateTask);