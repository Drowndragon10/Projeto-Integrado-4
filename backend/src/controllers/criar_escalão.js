const { Category } = require('../models');

/**
 * Criar um novo escalão
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Verificar se os campos obrigatórios foram fornecidos
    if (!name || !description) {
      return res.status(400).json({
        error: 'É obrigatório preencher todos os campos.',
      });
    }

    // Verificar se já existe um escalão com o mesmo nome
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(409).json({
        error: 'Já existe um escalão com esse nome.',
      });
    }

    // Criar o novo escalão
    const newCategory = await Category.create({ name, description });

    return res.status(201).json({
      message: 'Escalão criado com sucesso!',
      category: newCategory,
    });
  } catch (error) {
    console.error('Erro ao criar escalão:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  createCategory,
};
