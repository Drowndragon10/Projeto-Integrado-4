const express = require('express');
const { createReport } = require('../controllers/reportController');

const router = express.Router();

// Rota para criar um relatório
router.post('/create', createReport);

module.exports = router;