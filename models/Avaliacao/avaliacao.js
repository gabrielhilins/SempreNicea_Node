const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
const Avaliacao = sequelize.define('Avaliacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // pique `GenerationType.IDENTITY`
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  nota: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
      max: 5, // Garante que a nota ta entre 0 a 5
    },
  },
  dataHora: {
    type: DataTypes.DATE, // Armazena data e hora
    allowNull: false,
    defaultValue: DataTypes.NOW, // Define o momento atual como padrão
  },
});

  // Projeto avaliado (relacionamento obrigatório)
Avaliacao.associate = (models) => {
  Avaliacao.belongsTo(models.Projeto, {
    foreignKey: 'projeto_id',
    as: 'projetoAvaliado',
    allowNull: false,
  });
};
return Avaliacao;
}