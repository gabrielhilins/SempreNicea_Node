const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configuração da conexão ao banco de dados
const Membro = require('./Membro'); // Importar o modelo Membro

const Eventos = sequelize.define('Eventos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    arquivosMidia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dataEvento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataPublicado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Associação Many-to-One com Membro
Eventos.belongsTo(Membro, { as: 'publicadorEventos', foreignKey: 'publicadorEventosId' });

// Associação Many-to-Many com Membro
Eventos.belongsToMany(Membro, {
    through: 'evento_contribuidores',
    as: 'contribuidoresEventos',
    foreignKey: 'eventoId',
    otherKey: 'membroId'
});

module.exports = Eventos;
