const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jogador', {
    id_jogador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_encarregado_educacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'encarergado_educacao',
        },
        key: 'id_encarregado_educacao'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    posicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clube: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naturalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jogador',
    schema: 'public'
  });
};
