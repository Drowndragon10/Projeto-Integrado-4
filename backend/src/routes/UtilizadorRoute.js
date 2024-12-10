const express = require('express');
const { completeRegistration, listUsers, deleteUser, updateUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate'); // Middleware para rotas protegidas

const router = express.Router();

// Rota para completar o registro de um convite
router.post('/complete-registration', completeRegistration);

// Rota para listar todos os usuários (apenas administradores, por exemplo)
router.get('/', authenticate, listUsers);

// Rota para excluir um usuário
router.delete('/:id', authenticate, deleteUser);

// Rota para atualizar informações de um usuário
router.put('/:id', authenticate, updateUser);

module.exports = router;
