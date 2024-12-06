const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
const noticia = sequelize.define('Noticia', {
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
  membro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

noticia.associate = (models) => {
  noticia.belongsTo(models.Membro, {
      foreignKey: 'membro_id',
      as: 'publicador',
  });
};
return noticia;
}
