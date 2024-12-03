const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('encarergado_educacao', {
    id_encarregado_educacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contacto: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attribute_45: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'encarergado_educacao',
    schema: 'public'
  });
};
