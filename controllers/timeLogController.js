const TimeLog = require('../models/TimeLog');

exports.createTimeLog = async (req, res) => {
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
};

exports.getTimeLogs = async (req, res) => {
  try {
    const timeLogs = await TimeLog.find({ user: req.user.id })
      .populate('project', 'title')
      .populate('task', 'title');
    res.json(timeLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
