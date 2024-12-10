const express = require('express');
const router = express.Router();
const ConviteController = require('../controllers/ConviteController');

// Definir as rotas relacionadas ao convite
router.post('/', ConviteController.createInvite);
router.delete('/:id', ConviteController.deleteInvite);

module.exports = router;
