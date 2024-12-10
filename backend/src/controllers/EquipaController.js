const { Team } = require('../models');

/**
 * Criar uma nova equipa
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const createTeam = async (req, res) => {
  try {
    const { 
      teamName, 
      district, 
      county, 
      mainCoach, 
      category, 
      teamType, 
      description 
    } = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!teamName || !district || !county || !mainCoach || !category || !teamType || !description) {
      return res.status(400).json({ 
        error: 'É obrigatório preencher todos os campos.' 
      });
    }

    // Verificar se já existe uma equipa com o mesmo nome e escalão
    const existingTeam = await Team.findOne({ 
      where: { 
        teamName, 
        category 
      } 
    });
    if (existingTeam) {
      return res.status(409).json({ 
        error: 'Já existe uma equipa com este nome e escalão.' 
      });
    }

    // Criar a nova equipa
    const newTeam = await Team.create({
      teamName,
      district,
      county,
      mainCoach,
      category,
      teamType,
      description,
    });

    return res.status(201).json({
      message: 'Equipa criada com sucesso!',
      team: newTeam,
    });
  } catch (error) {
    console.error('Erro ao criar equipa:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

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
  createTeam,
  deleteTeam,
};