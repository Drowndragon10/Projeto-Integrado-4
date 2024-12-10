const express = require('express');
const router = express.Router();
const EscalaoController = require('../controllers/EscalaoController');

// Definir as rotas
router.post('/', EscalaoController.createEscalao);
router.get('/', EscalaoController.getAllEscaloes);
router.get('/:id', EscalaoController.getEscalaoById);
router.put('/:id', EscalaoController.updateEscalao);
router.delete('/:id', EscalaoController.deleteEscalao);

module.exports = router;
