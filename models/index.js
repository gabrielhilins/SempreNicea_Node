const { Sequelize } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // Caminho para o banco de dados SQLite
});

// Importando os modelos
const Membro = require('./Membro/membro')(sequelize);
const Noticia = require('./Noticia/noticia')(sequelize);
const Avaliacao = require('./Avaliacao/avaliacao')(sequelize);
const Projeto = require('./Projeto/projeto')(sequelize);
const Evento = require('./Evento/evento')(sequelize);

// Registre as associações
Membro.associate({ Noticia, Projeto, Evento });  // Membro associa-se com Noticia, Projeto e Evento
Noticia.associate({ Membro });  // Noticia pertence a Membro
Projeto.associate({ Avaliacao, Membro });  // Projeto associa-se com Avaliacao e Membro
Avaliacao.associate({ Projeto });  // Avaliacao pertence a Projeto
Evento.associate({ Membro });  // Evento associa-se com Membro

// Exportar a instância Sequelize e os modelos
module.exports = {
  sequelize,
  Avaliacao,
  Evento,
  Membro,
  Projeto,
  Noticia
};
