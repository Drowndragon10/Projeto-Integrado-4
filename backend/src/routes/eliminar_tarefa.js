const express = require('express');
const { deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Rota para eliminar uma tarefa
router.delete('/delete/:id', deleteTask);

module.exports = router;
