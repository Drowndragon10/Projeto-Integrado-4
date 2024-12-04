const { User } = require('../models');
const bcrypt = require('bcrypt'); // Para verificar a senha
const jwt = require('jsonwebtoken'); // Para gerar tokens JWT

// Chave secreta para JWT (deve ser armazenada no .env)
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

/**
 * Login user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se todos os campos foram preenchidos
    if (!email || !password) {
      return res.status(400).json({ error: 'É obrigatório preencher todos os campos.' });
    }

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Utilizador não encontrado.' });
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h', // Token válido por 1 hora
    });

    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  loginUser,
};
