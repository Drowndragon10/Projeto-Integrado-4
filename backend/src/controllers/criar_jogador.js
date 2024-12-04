const { Player, Category } = require('../models');

/**
 * Criar um novo jogador
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const createPlayer = async (req, res) => {
  try {
    const {
      name,
      birthDate,
      guardianOrAgent,
      nationality,
      residence,
      position,
      categoryId,
      club,
      dominantFoot,
      height,
      weight,
      link,
    } = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!name || !birthDate || !guardianOrAgent || !nationality || !residence || !position ||
      !categoryId || !club || !dominantFoot || !height || !weight || !link) {
      return res.status(400).json({
        error: 'É obrigatório preencher todos os campos.',
      });
    }

    // Verificar se o escalão existe
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({
        error: 'Escalão não encontrado.',
      });
    }

    // Criar o novo jogador
    const newPlayer = await Player.create({
      name,
      birthDate,
      guardianOrAgent,
      nationality,
      residence,
      position,
      categoryId,
      club,
      dominantFoot,
      height,
      weight,
      link,
    });

    return res.status(201).json({
      message: 'Jogador criado com sucesso!',
      player: newPlayer,
    });
  } catch (error) {
    console.error('Erro ao criar jogador:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  createPlayer,
};
