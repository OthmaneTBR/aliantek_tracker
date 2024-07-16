const Task = require('../models/Task');
const Project = require('../models/Project');
const User = require('../models/User');

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    if (task.project) {
      await Project.findByIdAndUpdate(task.project, { $push: { tasks: task._id } });
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('project', 'title').populate('assignedTo', 'name email');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('project', 'title').populate('assignedTo', 'name email');
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const oldProjectId = task.project;
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (oldProjectId !== updatedTask.project) {
      if (oldProjectId) {
        await Project.findByIdAndUpdate(oldProjectId, { $pull: { tasks: task._id } });
      }
      if (updatedTask.project) {
        await Project.findByIdAndUpdate(updatedTask.project, { $push: { tasks: task._id } });
      }
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};