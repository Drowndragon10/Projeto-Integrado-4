const { Report } = require('../models');

/**
 * Eliminar um relatório
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params; // ID do relatório fornecido nos parâmetros da URL

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({
        error: 'O ID do relatório é obrigatório.',
      });
    }

    // Verificar se o relatório existe
    const report = await Report.findByPk(id);
    if (!report) {
      return res.status(404).json({
        error: 'Relatório não encontrado.',
      });
    }

    // Eliminar o relatório
    await Report.destroy({ where: { id } });

    return res.status(200).json({
      message: 'Relatório eliminado com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar relatório:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deleteReport,
};
