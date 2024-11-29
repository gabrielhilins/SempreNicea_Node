const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Membro = sequelize.define('Usuario', {

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

})