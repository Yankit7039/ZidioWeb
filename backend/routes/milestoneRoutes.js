const express = require('express');
const Milestone = require('../models/Milestone');
const router = express.Router();

// Get all milestones
router.get('/', async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
