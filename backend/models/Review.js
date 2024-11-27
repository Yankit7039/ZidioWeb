const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  clientName: String,
  project: String,
  feedback: String,
  rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);
