const express = require('express');
const { inviteUser, registerUser } = require('../controllers/authController');

const router = express.Router();

// Rota para enviar convite (protegida, apenas administradores podem usar)
router.post('/invite', inviteUser);

// Rota para registro usando o token
router.post('/register', registerUser);

module.exports = router;
