const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models');
const avaliacaoRoutes = require('./routes/Avaliacao/avaliacao');
const areasTematicasRoutes = require('./routes/AreasTematicas/areasTematicas');
const noticiasRoutes = require('./routes/Noticia/noticia');
const projetoRoutes = require('./routes/Projeto/projeto');
const membroRoutes = require('./routes/Membro/membro');

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/areasTematicas', areasTematicasRoutes);
app.use('/noticia', noticiasRoutes);
app.use('/projeto', projetoRoutes);
app.use('/membro', membroRoutes);

// Sincronização do banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados sincronizado!'))
  .catch(err => console.error('Erro ao sincronizar banco de dados:', err));

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
