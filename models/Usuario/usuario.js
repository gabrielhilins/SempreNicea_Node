const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
        return sequelize.define('Usuario', {

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nomeUsuario:{
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
};
