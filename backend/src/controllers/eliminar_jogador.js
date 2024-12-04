const { Player } = require('../models');

/**
 * Eliminar um jogador
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params; // ID do jogador fornecido nos parâmetros da URL

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({
        error: 'O ID do jogador é obrigatório.',
      });
    }

    // Verificar se o jogador existe
    const player = await Player.findByPk(id);
    if (!player) {
      return res.status(404).json({
        error: 'Jogador não encontrado.',
      });
    }

    // Eliminar o jogador
    await Player.destroy({ where: { id } });

    return res.status(200).json({
      message: 'Jogador eliminado com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar jogador:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deletePlayer,
};
