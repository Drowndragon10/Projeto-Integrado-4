const { User } = require('../models');

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate request body
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'É obrigatório preencher todos os campos.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Já existe um utilizador com este e-mail..' });
    }

    // Create a new user
    const newUser = await User.create({ username, email, password });

    return res.status(201).json({
      message: 'Utilizador registado com sucesso!',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  registerUser,
};
