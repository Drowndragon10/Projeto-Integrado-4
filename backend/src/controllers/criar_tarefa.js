const { Task } = require('../models');

/**
 * Criar uma nova tarefa
 * @param {Object} req - Objeto de requisição do Express
 * @param {Object} res - Objeto de resposta do Express
 */
const createTask = async (req, res) => {
  try {
    const { userId, gameId, playerId, description, date } = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!userId || !gameId || !playerId || !description || !date) {
      return res.status(400).json({
        error: 'Todos os campos obrigatórios devem ser preenchidos: utilizador, jogo, jogador, descrição e data.',
      });
    }

    // Criar a nova tarefa
    const newTask = await Task.create({
      userId,
      gameId,
      playerId,
      description,
      date,
    });

    return res.status(201).json({
      message: 'Tarefa criada com sucesso!',
      task: newTask,
    });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor.',
    });
  }
};

module.exports = {
  createTask,
};
