const { Task } = require('../models');

/**
 * Eliminar uma tarefa
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // ID da tarefa fornecido nos parâmetros da URL

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({
        error: 'O ID da tarefa é obrigatório.',
      });
    }

    // Verificar se a tarefa existe
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({
        error: 'Tarefa não encontrada.',
      });
    }

    // Eliminar a tarefa
    await Task.destroy({ where: { id } });

    return res.status(200).json({
      message: 'Tarefa eliminada com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao eliminar tarefa:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  deleteTask,
};
