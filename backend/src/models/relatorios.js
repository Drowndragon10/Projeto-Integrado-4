const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relatorios', {
    id_relatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jogador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'jogador',
        },
        key: 'id_jogador'
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tecnica: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    velocidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atitude_competitiva: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inteligencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    morfologia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nota_final: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comentarios: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'relatorios',
    schema: 'public'
  });
};
