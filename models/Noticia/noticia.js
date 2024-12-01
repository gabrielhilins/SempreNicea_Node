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
  /*
  membro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Membro',
      key: 'id'
    },
  },
  */
});

/*
// Relacionamentos
Noticia.associate = (models) => {
  // Relacionamento com Membro
  Noticia.belongsTo(models.Membro, {
    foreignKey: 'membro_id',
    as: 'membro',
    allowNull: false,
  });
};
*/

module.exports = Noticia;
