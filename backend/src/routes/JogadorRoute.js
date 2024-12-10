const express = require('express');
const router = express.Router();
const JogadorController = require('../controllers/JogadorController');

// Definir as rotas
router.post('/', JogadorController.createJogador);
router.get('/', JogadorController.getAllJogadores);
router.get('/:id', JogadorController.getJogadorById);
router.put('/:id', JogadorController.updateJogador);
router.delete('/:id', JogadorController.deleteJogador);

module.exports = router;
