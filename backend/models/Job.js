const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requirements: String,
  postedDate: Date
});

module.exports = mongoose.model('Job', jobSchema);
