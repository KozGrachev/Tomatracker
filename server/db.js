const mongoose = require('mongoose');

exports.connect = mongoose.connect('mongodb://localhost:27017/tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', error => console.error(error, "ERROR CONNECTING TO DB"));

