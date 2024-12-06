const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
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

});

Projeto.associate = (models) => {
    Projeto.belongsTo(models.Membro, {
        foreignKey: 'membro_id',
        as: 'autor',
    });
    Projeto.hasMany(models.Avaliacao, {
        foreignKey: 'avaliacao_id',
        as: 'avaliacoes',
    });
  };
return Projeto;

}