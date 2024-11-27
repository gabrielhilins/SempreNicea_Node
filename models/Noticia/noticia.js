const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Noticia = sequelize.define('Noticia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataPublicacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  visualizacoes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Noticia;
