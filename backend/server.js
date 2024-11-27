const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const teamRoutes = require('./routes/teamRoutes');
const jobRoutes = require('./routes/jobRoutes');
const milestoneRoutes = require('./routes/milestoneRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/team', teamRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/milestones', milestoneRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
