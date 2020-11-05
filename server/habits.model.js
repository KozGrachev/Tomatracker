const mongoose = require('mongoose');

exports.Habits = mongoose.model('Habit', new mongoose.Schema({
  itemType: { type: String, default: 'habit' },
  title: { type: String, required: true },
  isDue: { type: Boolean, default: true },
  dateCreated: { type: Date, required: true },
  dateLastDone: { type: Date, default: null },
  repeatTimes: { type: Number, default: 1 },
  timeFrameInDays: { type: Number, default: 7},
}));