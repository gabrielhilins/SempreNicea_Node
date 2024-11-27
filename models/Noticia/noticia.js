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
});

// Relacionamentos
Noticia.associate = (models) => {
  // Relacionamento com Membro
  Noticia.belongsTo(models.Membro, {
    foreignKey: 'membro_id',
    as: 'autor',
    allowNull: false,
  });

  // Relacionamento com AreasTematicas
  Noticia.belongsTo(models.AreasTematicas, {
    foreignKey: 'area_tematica_id',
    as: 'areaTematica',
    allowNull: false,
  });
};

module.exports = Noticia;
