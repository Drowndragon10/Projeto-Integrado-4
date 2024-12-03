const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilizador', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'tipo_utilizador',
        },
        key: 'id_tipo_utilizador'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'utilizador',
    schema: 'public'
  });
};
