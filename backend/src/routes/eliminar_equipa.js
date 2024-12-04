const express = require('express');
const { deleteTeam } = require('../controllers/teamController');

const router = express.Router();

// Rota para eliminar uma equipa
router.delete('/delete', deleteTeam);

module.exports = router;