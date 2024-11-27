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
  // Relacionamento com Autor
  Noticia.belongsTo(models.Usuario, {
    foreignKey: 'autor_id',
    as: 'autor',
  });

  // Relacionamento com Comentários
  Noticia.hasMany(models.Comentario, {
    foreignKey: 'noticia_id',
    as: 'comentarios',
  });

  // Relacionamento com Categorias
  Noticia.belongsTo(models.Categoria, {
    foreignKey: 'categoria_id',
    as: 'categoria',
  });

  // Relacionamento com Tags (M:N)
  Noticia.belongsToMany(models.Tag, {
    through: 'NoticiaTag',
    foreignKey: 'noticia_id',
    as: 'tags',
  });
};

module.exports = Noticia;
