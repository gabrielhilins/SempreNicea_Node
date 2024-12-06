const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Membro = sequelize.define('Membro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nomeMembro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: DataTypes.TEXT,
        contato: DataTypes.INTEGER,
        localizacao: DataTypes.STRING,
        fotoPerfil: DataTypes.STRING,
        fotoFundo: DataTypes.STRING,
        comprovante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vinculoUniversitario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        formacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Membro.associate = (models) => {
        Membro.hasMany(models.Noticia, { foreignKey: 'membro_id', as: 'noticias' });
    };

    return Membro;
};
