const express = require('express');
const router = express.Router();
const EquipaController = require('../controllers/EquipaController');

// Definir as rotas
router.post('/', EquipaController.createEquipa);
router.get('/', EquipaController.getAllEquipas);
router.get('/:id', EquipaController.getEquipaById);
router.put('/:id', EquipaController.updateEquipa);
router.delete('/:id', EquipaController.deleteEquipa);

module.exports = router;
