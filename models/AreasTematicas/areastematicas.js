const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AreasTematicas = sequelize.define('AreasTematicas', {
    id: {
      type: DataTypes.BIGINT,  // Use BIGINT para representar o tipo Long do Java
      primaryKey: true,
      autoIncrement: true,  // Garante que o id será gerado automaticamente
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,  // Pode definir como obrigatória se necessário
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,  // Pode ser null, se for o caso
    },
    dataInicio: {
      type: DataTypes.STRING,  // A string pode ser usada aqui, mas considere usar DATE ou DATEONLY
      allowNull: true,
    },
    dataTermino: {
      type: DataTypes.STRING,  // O mesmo vale para este campo, pode ser usado DATE ou DATEONLY
      allowNull: true,
    },
    tempoTotal: {
      type: DataTypes.BIGINT,  // Usando BIGINT para representar um valor numérico
      allowNull: true,  // Pode ser null, se o valor não for fornecido
    },
  });

  return AreasTematicas; // Aqui você retorna a definição do modelo para que possa ser utilizado
};
