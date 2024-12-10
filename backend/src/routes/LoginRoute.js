const express = require('express');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Rota para login
router.post('/login', loginUser);

module.exports = router;
