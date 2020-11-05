/* eslint-disable no-console */
const { Habits } = require('./habits.model');
const { frameToDays } = require('./helpers');

exports.getHabits = async (req, res) => {
  try {
    const allHabits = await Habits.find();
    res.send(allHabits);

  } catch (error) {
    console.error('Error retrieving habits from DB:', error);
  }
};

exports.createHabit = async (req, res) => {
  console.log(req.body);
  try {
    const newHabit = await Habits.create(req.body);
    res.sendStatus(201);
    res.send(newHabit);
  } catch (error) {
    console.error("Error posting to DB: ", error);
    res.sendStatus(500);
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    await Habits.findByIdAndDelete(req.params.id, (err, habit) => {
      if (err) return res.status(500).send(err);

      return res.status(200).send({
        message: "Deleted habit successfully",
        _id: habit.id,
      });
    });
  } catch (error) {
    console.error("Error deleting habit from DB: ", error);
  }
};

exports.updateHabit = async (req, res) => {
  const habit = await Habits.findById(req.params.id, err => console.error(err));
  let updated = false;

  if (req.query.repeat) {
    habit.repeatTimes = req.query.repeat;
    updated = true;
  }
  if (req.query.frame) {
    habit.timeFrameInDays = req.query.frame; // frameToDays(req.query.frame);
    updated = true;
  }

  if (updated) {
    await habit.save((err, tsk) => {
      if (err) res.send(err.message);
      else res.send(tsk);
    });
  } else res.status(400).send(`Invalid request for parameter [${req.param}].`);

};