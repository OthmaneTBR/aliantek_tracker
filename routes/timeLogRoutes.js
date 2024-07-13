const express = require('express');
const TimeLog = require('../models/TimeLog');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const timeLog = new TimeLog({
      ...req.body,
      user: req.user.id
    });
    await timeLog.save();
    res.status(201).json(timeLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const timeLogs = await TimeLog.find({ user: req.user.id })
      .populate('project', 'title')
      .populate('task', 'title');
    res.json(timeLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for updating and deleting time logs if needed

module.exports = router;