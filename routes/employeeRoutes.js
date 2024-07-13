const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new employee
router.post('/', authMiddleware, async (req, res) => {
  try {
    const employee = new User(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all employees
router.get('/', authMiddleware, async (req, res) => {
  try {
    const employees = await User.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get employee by id
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update employee by id
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const employee = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete employee by id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const employee = await User.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
