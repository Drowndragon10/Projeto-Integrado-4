const express = require('express');
const { renderLoginPage, loginUser, renderRegisterPage, registerUser } = require('../controllers/authController');

const router = express.Router();

// Página de login
router.get('/login', renderLoginPage);
router.post('/login', loginUser);

// Página de registo
router.get('/register', renderRegisterPage);
router.post('/register', registerUser);

module.exports = router;
