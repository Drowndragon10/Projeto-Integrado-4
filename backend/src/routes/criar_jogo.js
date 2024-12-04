const express = require('express');
const { createGame } = require('../controllers/gameController');

const router = express.Router();

// Rota para criar um jogo
router.post('/create', createGame);

module.exports = router;
