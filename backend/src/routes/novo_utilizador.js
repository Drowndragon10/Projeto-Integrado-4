const express = require('express');
const { inviteUser } = require('../controllers/adminController');

const router = express.Router();

// Rota para convidar novos utilizadores
router.post('/invite', inviteUser);

module.exports = router;
