const {dataTypes} = require('sequelize');
const sequelize = require('../index');
const { describe } = require('node:test');
const { type } = require('os');

const Membro = sequelize.define('Membro', {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nomeUsario:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    contato:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    localizacao:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fotoPerfil:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    fotoFundo:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    comprovante:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    vinculoUniversitario:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    formacao:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Membro.associate = (models) =>{
    Membro.belongsTo(models.Projeto, {
        foreignKey: 'projeto_id',
        as: 'projeto',
    });
    Membro.belongsTo(models.Evento, {
        foreignKey: 'evento_id',
        as: 'evento',
    });
}

module.exports = Membro;
