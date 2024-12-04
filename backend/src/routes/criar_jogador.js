const express = require('express');
const { createPlayer } = require('../controllers/playerController');

const router = express.Router();

// Rota para criar um jogador
router.post('/create', createPlayer);

module.exports = router;
