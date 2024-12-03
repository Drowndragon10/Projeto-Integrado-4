const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico', {
    id_historico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_relatorio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'relatorios',
        },
        key: 'id_relatorio'
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historico',
    schema: 'public'
  });
};
