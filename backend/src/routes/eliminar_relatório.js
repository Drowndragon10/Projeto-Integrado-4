const express = require('express');
const { deleteReport } = require('../controllers/reportController');

const router = express.Router();

// Rota para eliminar um relatório
router.delete('/delete/:id', deleteReport);

module.exports = router;
