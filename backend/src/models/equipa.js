const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipa', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_equipa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_escalao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'escalao',
        },
        key: 'id_escalao'
      }
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
    id_tipo_equipa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'tipo_equipa',
        },
        key: 'id_tipo_equipa'
      }
    }
  }, {
    sequelize,
    tableName: 'equipa',
    schema: 'public'
  });
};
