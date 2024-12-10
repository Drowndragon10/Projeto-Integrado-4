const express = require('express');
const { deleteUser } = require('../controllers/adminController');

const router = express.Router();

// Rota para eliminar um utilizador
router.delete('/delete', deleteUser);

module.exports = router;
