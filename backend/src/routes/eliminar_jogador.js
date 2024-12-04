const express = require('express');
const { deletePlayer } = require('../controllers/playerController');

const router = express.Router();

// Rota para eliminar um jogador
router.delete('/delete/:id', deletePlayer);

module.exports = router;
