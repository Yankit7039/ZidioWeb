const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Get all team members
router.get('/', async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
