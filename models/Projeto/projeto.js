const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Projeto = sequelize.define('Projeto', {

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

    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    anexoImagens: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    arquivoPdf: {
        type: DataTypes.STRING,
        allowNull: true,
    },

})

module.exports = Projeto;