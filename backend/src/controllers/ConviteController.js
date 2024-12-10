const { InviteToken } = require('../models');
const crypto = require('crypto');

const inviteUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar se o e-mail já está em uso
    const existingToken = await InviteToken.findOne({ where: { email } });
    if (existingToken) {
      return res.status(409).json({ error: 'Este e-mail já foi convidado.' });
    }

    // Gerar um token único
    const token = crypto.randomBytes(16).toString('hex');
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias

    // Salvar no banco de dados
    await InviteToken.create({ email, token, expiresAt });

    return res.status(201).json({ message: 'Convite enviado com sucesso!', token });
  } catch (error) {
    console.error('Erro ao convidar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { inviteUser };
