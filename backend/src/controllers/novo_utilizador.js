const { User } = require('../models');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

/**
 * Criar um novo utilizador (administradores convidam utilizadores)
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const inviteUser = async (req, res) => {
  try {
    const { email, userType } = req.body;

    // Verificar se todos os campos foram preenchidos
    if (!email || !userType) {
      return res.status(400).json({ error: 'Os campos email e tipo de utilizador são obrigatórios.' });
    }

    // Verificar se o utilizador já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Já existe um utilizador com este e-mail.' });
    }

    // Gerar uma senha temporária
    const tempPassword = crypto.randomBytes(8).toString('hex'); // Exemplo: senha aleatória com 8 caracteres

    // Fazer hash da senha temporária
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Criar o utilizador
    const newUser = await User.create({
      email,
      password: hashedPassword, // Armazena o hash da senha temporária
      userType, // Tipo de utilizador (ex.: "admin", "user")
    });

    // Retornar os dados do utilizador criado
    return res.status(201).json({
      message: 'Utilizador criado com sucesso!',
      user: {
        id: newUser.id,
        email: newUser.email,
        userType: newUser.userType,
      },
      tempPassword, // Senha temporária (pode ser usada para envio por e-mail)
    });
  } catch (error) {
    console.error('Erro ao convidar utilizador:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  inviteUser,
};
