const { Sequelize } = require('sequelize');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('Projeto4', 'postgres', 'postres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
