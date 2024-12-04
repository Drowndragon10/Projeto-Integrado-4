const express = require('express');
const { deleteCategory } = require('../controllers/categoryController');

const router = express.Router();

// Rota para eliminar um escalão
router.delete('/delete/:id', deleteCategory);

module.exports = router;
