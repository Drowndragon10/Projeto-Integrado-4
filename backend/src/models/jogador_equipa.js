const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogador_equipa', {
    id_equipa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'equipa',
        },
        key: 'id_equipa'
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
    tableName: 'jogador_equipa',
    schema: 'public'
  });
};
