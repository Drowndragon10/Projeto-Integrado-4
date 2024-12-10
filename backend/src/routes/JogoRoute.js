const express = require('express');
const router = express.Router();
const JogoController = require('../controllers/JogoController');

// Definir as rotas
router.post('/', JogoController.createJogo);
router.get('/', JogoController.getAllJogos);
router.get('/:id', JogoController.getJogoById);
router.put('/:id', JogoController.updateJogo);
router.delete('/:id', JogoController.deleteJogo);

module.exports = router;
