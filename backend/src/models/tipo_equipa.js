const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_equipa', {
    id_tipo_equipa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_equipa',
    schema: 'public'
  });
};
