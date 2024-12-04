const { Team } = require('../models');

/**
 * Eliminar uma equipa
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteTeam = async (req, res) => {
  try {
    const { teamName, category } = req.body;

    // Verificar se os campos obrigatórios foram fornecidos
    if (!teamName || !category) {
      return res.status(400).json({
        error: 'É obrigatório preencher todos os campos.',
      });
    }

    // Procurar a equipa com base no nome e escalão
    const team = await Team.findOne({
      where: { teamName, category },
    });

    // Verificar se a equipa existe
    if (!team) {
      return res.status(404).json({
        error: 'Equipa não encontrada. Verifique os dados fornecidos.',
      });
    }

    // Eliminar a equipa
    await Team.destroy({ where: { id: team.id } });

    return res.status(200).json({
      message: 'Equipa eliminada com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar a equipa:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deleteTeam,
};
