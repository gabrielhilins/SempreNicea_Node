const { DataTypes } = require('sequelize');
const sequelize = require('../index'); // Certifique-se de ajustar o caminho para o arquivo de configuração Sequelize

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

// Relacionamentos
Avaliacao.associate = (models) => {
  // Membro avaliador (caso seja um membro)
  Avaliacao.belongsTo(models.Membro, {
    foreignKey: 'membro_id',
    as: 'membroAvaliador',
  });

  // Usuário avaliador (caso seja um usuário)
  Avaliacao.belongsTo(models.Usuario, {
    foreignKey: 'usuario_id',
    as: 'usuarioAvaliador',
  });

  // Projeto avaliado (relacionamento obrigatório)
  Avaliacao.belongsTo(models.Projeto, {
    foreignKey: 'projeto_id',
    as: 'projetoAvaliado',
    allowNull: false,
  });
};

module.exports = Avaliacao;
