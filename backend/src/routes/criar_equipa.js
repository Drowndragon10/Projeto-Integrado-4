const express = require('express');
const { createTeam } = require('../controllers/teamController');

const router = express.Router();

// Rota para criar uma equipa
router.post('/create', createTeam);

module.exports = router;