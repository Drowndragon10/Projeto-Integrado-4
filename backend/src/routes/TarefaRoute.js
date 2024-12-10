const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

// Definir as rotas
router.post('/', TarefaController.createTarefa);
router.get('/', TarefaController.getAllTarefas);
router.get('/:id', TarefaController.getTarefaById);
router.put('/:id', TarefaController.updateTarefa);
router.delete('/:id', TarefaController.deleteTarefa);

module.exports = router;
