/* eslint-disable no-console */
const { Tasks } = require('./tasks.model');

exports.getTasks = async (req, res) => {
  try {
    const allTasks = await Tasks.find();
    res.send(allTasks);

  } catch (error) {
    console.error('Error retrieving tasks from DB:', error);
  }
};

exports.createTask = async (req, res) => {
  console.log(req.body);
  try {
    const newTask = await Tasks.create(req.body);
    res.sendStatus(201);
    res.send(newTask);
  } catch (error) {
    console.error("Error posting to DB: ", error);
    res.sendStatus(500);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id, (err, task) => {
      if (err) return res.status(500).send(err);

      return res.status(200).send({
        message: "Deleted task successfully",
        _id: task.id,
      });
    });
  } catch (error) {
    console.error("Error deleting task from DB: ", error);
  }
};

exports.updateTask = async (req, res) => {
  const task = await Tasks.findById(req.params.id, err => console.error(err));

  if (req.params.property === 'priority') {
    task.priority = req.params.value;
    await task.save((err, tsk, rows) => {
      console.log(`error: ${err}, tsk:${tsk}, rows:${rows}`);
      if (err) res.send(err.message);
      else res.send(tsk);
    });
  } else res.status(400).send(`Invalid request for parameter [${req.param}].`);
};