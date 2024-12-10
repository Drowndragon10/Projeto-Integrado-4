const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se os campos foram preenchidos
    if (!email || !password) {
      return res.status(400).json({ error: 'Os campos e-mail e senha são obrigatórios.' });
    }

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { userId: user.id, userType: user.userType }, // Dados para o token
      process.env.JWT_SECRET || 'supersecretkey',  // Chave secreta
      { expiresIn: '1h' }                          // Expiração
    );

    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
    });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { loginUser };
