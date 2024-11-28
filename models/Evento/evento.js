const { DataTypes } = require('sequelize');
const sequelize = require('../index'); 
const Membro = require('./Membro'); 

const Eventos = sequelize.define('Eventos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    arquivosMidia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dataEvento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dataPublicado: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    publicadorEventosId: {
        type: DataTypes.INTEGER,
        references: {
            model: Membro,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'eventos',
    timestamps: false, 
});

// Relacionamento com Membro
Eventos.belongsTo(Membro, {
    foreignKey: 'publicadorEventosId',
    as: 'publicador',
});

module.exports = Eventos;
