const { Game } = require('../models');

/**
 * Eliminar um jogo
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params; // ID do jogo fornecido nos parâmetros da URL

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({
        error: 'O ID do jogo é obrigatório.',
      });
    }

    // Verificar se o jogo existe
    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({
        error: 'Jogo não encontrado.',
      });
    }

    // Eliminar o jogo
    await Game.destroy({ where: { id } });

    return res.status(200).json({
      message: 'Jogo eliminado com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar jogo:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deleteGame,
};
