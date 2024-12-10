const { Game, Team } = require('../models');

/**
 * Criar um novo jogo
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const createGame = async (req, res) => {
  try {
    const { homeTeamId, awayTeamId, gameDate, location, category } = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!homeTeamId || !awayTeamId || !gameDate || !location || !category) {
      return res.status(400).json({
        error: 'É obrigatório preencher todos os campos.',
      });
    }

    // Verificar se as equipas existem
    const homeTeam = await Team.findByPk(homeTeamId);
    const awayTeam = await Team.findByPk(awayTeamId);

    if (!homeTeam) {
      return res.status(404).json({ error: 'A equipa da casa não foi encontrada.' });
    }

    if (!awayTeam) {
      return res.status(404).json({ error: 'A equipa de fora não foi encontrada.' });
    }

    // Verificar se a equipa da casa e de fora são diferentes
    if (homeTeamId === awayTeamId) {
      return res.status(400).json({ error: 'A equipa da casa e a equipa de fora devem ser diferentes.' });
    }

    // Criar o novo jogo
    const newGame = await Game.create({
      homeTeamId,
      awayTeamId,
      gameDate,
      location,
      category,
    });

    return res.status(201).json({
      message: 'Jogo criado com sucesso!',
      game: newGame,
    });
  } catch (error) {
    console.error('Erro ao criar jogo:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

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
  createGame,
  deleteGame,
};
