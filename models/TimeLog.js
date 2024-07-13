const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  date: { type: Date, required: true },
  hoursSpent: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('TimeLog', timeLogSchema);