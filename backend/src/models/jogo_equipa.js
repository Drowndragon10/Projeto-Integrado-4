const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogo_equipa', {
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
    tableName: 'jogo_equipa',
    schema: 'public'
  });
};
