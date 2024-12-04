const { User } = require('../models');

/**
 * Eliminar um utilizador
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar se o e-mail foi fornecido
    if (!email) {
      return res.status(400).json({ error: 'O campo email é obrigatório.' });
    }

    // Verificar se o utilizador existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Utilizador não encontrado.' });
    }

    // Excluir o utilizador
    await User.destroy({ where: { email } });

    return res.status(200).json({ message: 'Utilizador eliminado com sucesso!' });
  } catch (error) {
    console.error('Erro ao eliminar utilizador:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  deleteUser,
};
