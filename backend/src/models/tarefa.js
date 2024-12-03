const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarefa', {
    id_tarefa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'utilizador',
        },
        key: 'id_utilizador'
      }
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'estado',
        },
        key: 'id_estado'
      }
    },
    id_jogador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'jogador',
        },
        key: 'id_jogador'
      }
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarefa',
    schema: 'public'
  });
};
