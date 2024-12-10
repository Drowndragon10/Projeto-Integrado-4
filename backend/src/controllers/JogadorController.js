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
  createPlayer,
  deletePlayer,
};
