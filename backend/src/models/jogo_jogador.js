const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogo_jogador', {
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
    },
    id_jogo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'jogo',
        },
        key: 'id_jogo'
      }
    }
  }, {
    sequelize,
    tableName: 'jogo_jogador',
    schema: 'public'
  });
};
