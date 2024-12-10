const { User } = require('../models');
const bcrypt = require('bcrypt');

const completeRegistration = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    if (!email || !name || !password) {
      return res.status(400).json({ error: 'Os campos email, nome e senha são obrigatórios.' });
    }

    // Verificar se o usuário existe (convidado anteriormente)
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Convite não encontrado. Usuário não convidado.' });
    }

    // Atualizar os dados do usuário
    const hashedPassword = await bcrypt.hash(password, 10);
    user.name = name;
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      message: 'Registro completo com sucesso!',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error('Erro ao completar registro:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'name', 'userType', 'createdAt'],
    });

    return res.status(200).json({ users });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se o ID foi fornecido
    if (!id) {
      return res.status(400).json({ error: 'O ID do usuário é obrigatório.' });
    }

    // Verificar se o usuário existe
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Excluir o usuário
    await User.destroy({ where: { id } });

    return res.status(200).json({ message: 'Usuário eliminado com sucesso!' });
  } catch (error) {
    console.error('Erro ao eliminar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userType } = req.body;

    // Verificar se o usuário existe
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Atualizar os dados fornecidos
    if (name) user.name = name;
    if (userType) user.userType = userType;

    await user.save();

    return res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};
