const express = require('express');
const { createTimeLog, getTimeLogs } = require('../controllers/timeLogController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTimeLog);
router.get('/', authMiddleware, getTimeLogs);

// Add more routes for updating and deleting time logs if needed

module.exports = router;