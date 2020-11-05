const mongoose = require('mongoose');

exports.Tasks = mongoose.model('Task', new mongoose.Schema({
  itemType: {type: String, default: 'task'},
  title: { type: String, required: true },
  note: String,
  completed: { type: Boolean, default: false },
  dateCreated: { type: Date, required: true },
  dateCompleted: { type: Date, default: null },
  priority: {
    default: 1,
    type: Number,
    min: [1, 'Min priority is 1!'],
    max: [3, 'Max priority is 3!'],
  },
}));