const mongoose = require('mongoose');

exports.Tasks = mongoose.model('Task', new mongoose.Schema({
  content: { type: String, required: true},
  completed:{ type: Boolean, default: false},
  dateCreated: { type: Date, required: true },
  dateCompleted: { type: Date, default: null},
  priority: {
    required: true,
    type: Number,
    min: [1, 'Min priority is 1!'],
    max: [3, 'Max priority is 3!'],
  },
}));