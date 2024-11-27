const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

module.exports = mongoose.model('Milestone', milestoneSchema);
