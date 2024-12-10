const { InviteToken, User } = require('../models');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { email, password, token } = req.body;

    // Verificar se o token é válido
    const invite = await InviteToken.findOne({ where: { email, token, isUsed: false } });
    if (!invite || new Date() > invite.expiresAt) {
      return res.status(400).json({ error: 'Token inválido ou expirado.' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário
    const newUser = await User.create({ email, password: hashedPassword });

    // Marcar o token como usado
    invite.isUsed = true;
    await invite.save();

    return res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { registerUser };
