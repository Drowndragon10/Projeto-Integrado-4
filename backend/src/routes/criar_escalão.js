const express = require('express');
const { createCategory } = require('../controllers/categoryController');

const router = express.Router();

// Rota para criar um escalão
router.post('/create', createCategory);

module.exports = router;
