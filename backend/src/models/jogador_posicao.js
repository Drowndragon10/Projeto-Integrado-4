const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogador_posicao', {
    id_posicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'posicao',
        },
        key: 'id_posicao'
      }
    },
    id_jogador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'jogador',
        },
        key: 'id_jogador'
      }
    }
  }, {
    sequelize,
    tableName: 'jogador_posicao',
    schema: 'public'
  });
};
