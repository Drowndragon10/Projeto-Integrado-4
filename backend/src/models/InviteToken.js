// models/InviteToken.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const InviteToken = sequelize.define('InviteToken', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isUsed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = InviteToken;
