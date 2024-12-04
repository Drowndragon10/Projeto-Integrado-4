const { Category } = require('../models');

/**
 * Eliminar um escalão
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params; // ID do escalão fornecido nos parâmetros da URL

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({
        error: 'O ID do escalão é obrigatório.',
      });
    }

    // Verificar se o escalão existe
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        error: 'Escalão não encontrado.',
      });
    }

    // Eliminar o escalão
    await Category.destroy({ where: { id } });

    return res.status(200).json({
      message: 'Escalão eliminado com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar escalão:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deleteCategory,
};
