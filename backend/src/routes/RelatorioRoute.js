const express = require('express');
const router = express.Router();
const RelatorioController = require('../controllers/RelatorioController');

// Definir as rotas
router.post('/', RelatorioController.createRelatorio);
router.get('/', RelatorioController.getAllRelatorios);
router.get('/:id', RelatorioController.getRelatorioById);
router.put('/:id', RelatorioController.updateRelatorio);
router.delete('/:id', RelatorioController.deleteRelatorio);

module.exports = router;
