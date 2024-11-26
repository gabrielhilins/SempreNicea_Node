// models/index.js (ou onde você configura o Sequelize)
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',  // 
  storage: './database.sqlite',  // Caminho do banco de dados SQLite
});

module.exports = sequelize;  // Exporte a instância do Sequelize
