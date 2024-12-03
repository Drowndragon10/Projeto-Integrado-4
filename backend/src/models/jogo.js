const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogo', {
    id_jogo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tarefa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'tarefa',
        },
        key: 'id_tarefa'
      }
    },
    equipa_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    equipa_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conselho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jogo',
    schema: 'public'
  });
};
