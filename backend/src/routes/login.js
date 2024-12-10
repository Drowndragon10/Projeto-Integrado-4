const express = require('express');
const { renderLoginPage, loginUser } = require('../controllers/authController');

const router = express.Router();

// Página de login
router.get('/login', renderLoginPage);

// Processar o formulário de login
router.post('/login', loginUser);

module.exports = router;
