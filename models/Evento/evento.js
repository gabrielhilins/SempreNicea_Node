const { DataTypes } = require('sequelize');
const sequelize = require('../index'); 

const Evento = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true, // Campo opcional
  },
  arquivosMidia: {
    type: DataTypes.STRING,
    allowNull: true, // Campo opcional
  },
  dataEvento: {
    type: DataTypes.DATE,
    allowNull: false, // Campo obrigatório
  },
  dataPublicado: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Define o momento atual como padrão
    allowNull: false,
  },
});

// Relacionamentos
Evento.associate = (models) => {
  // Relacionamento com Membro (publicador)
  Evento.belongsTo(models.Membro, {
    foreignKey: 'publicadorEventosId',
    as: 'publicador',
    allowNull: false,
  });
};

module.exports = Evento;
