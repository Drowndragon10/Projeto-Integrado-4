const express = require('express');
const { deleteGame } = require('../controllers/gameController');

const router = express.Router();

// Rota para eliminar um jogo
router.delete('/delete/:id', deleteGame);

module.exports = router;
