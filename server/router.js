const router = require('express').Router();
const { getTasks, createTask, deleteTask, updateTask } = require('./tasks.controller');
const { getHabits, createHabit, deleteHabit, updateHabit } = require('./habits.controller');

module.exports = router.get('/tasks', getTasks);

module.exports = router.post('/tasks', createTask);

module.exports = router.delete('/tasks/:id', deleteTask);

module.exports = router.put('/tasks/:id', updateTask);


module.exports = router.get('/habits', getHabits);

module.exports = router.post('/habits', createHabit);

module.exports = router.delete('/habits/:id', deleteHabit);

module.exports = router.put('/habits/:id', updateHabit);