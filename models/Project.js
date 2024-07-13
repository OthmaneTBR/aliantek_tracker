const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' }
});

module.exports = mongoose.model('Project', projectSchema);