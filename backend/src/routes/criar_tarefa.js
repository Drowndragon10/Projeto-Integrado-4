const express = require('express');
const { createTask } = require('../controllers/taskController');

const router = express.Router();

// Rota para criar uma tarefa
router.post('/create', createTask);

module.exports = router;
