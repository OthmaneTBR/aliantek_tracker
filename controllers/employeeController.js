const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.createEmployee = async (req, res) => {
  try {
    const employee = new User(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({}, '-password');
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const updates = req.body;

    // If a new password is provided, hash it
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    } else {
      // If no new password is provided, remove the password field from updates
      delete updates.password;
    }

    const employee = await User.findByIdAndUpdate(req.params.id, updates, { 
      new: true, 
      runValidators: true 
    });

    if (!employee) {
      return res.status(404).send({ message: 'Employee not found' });
    }

    res.send(employee);
  } catch (error) {
    res.status(400).send({ message: 'Error updating employee', error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await User.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};