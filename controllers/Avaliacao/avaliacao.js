const Avaliacao  = require('../../models/Avaliacao/avaliacao'); // importa o modelo
console.log(Avaliacao);  // mostra o modelo definido pra ajudar no debug do negocio

// Retorna todas as avaliações
exports.getAllAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.status(200).json(avaliacoes);
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error); 
    res.status(500).json({ message: 'Erro ao buscar avaliações', error: error.message }); // botei pra aparecer a mensagem do erro pra ficar melhor de resolver 
  }
};

// Cria uma nova avaliação
exports.createAvaliacao = async (req, res) => {
  try {
    const { descricao, nota, membro_id, usuario_id, projeto_id } = req.body;
    const avaliacao = await Avaliacao.create({
      descricao,
      nota,
      membro_id,
      usuario_id,
      projeto_id,
      dataHora: new Date(),
    });
    res.status(201).json(avaliacao);
  } catch (error) {
    console.error('Erro ao criar avaliação:', error); 
    res.status(500).json({ message: 'Erro ao criar avaliação', error: error.message }); // botei pra aparecer a mensagem do erro pra ficar melhor de resolver 
  }
};

// Busca uma avaliação por ID
exports.getAvaliacaoById = async (req, res) => {
  try {
    const { id } = req.params; // parametro necessario que nem tem no spring
    const avaliacao = await Avaliacao.findByPk(id);
    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    res.status(200).json(avaliacao);
  } catch (error) {
    console.error('Erro ao buscar avaliação:', error); // Log do erro para o servidor
    res.status(500).json({ message: 'Erro ao buscar avaliação', error: error.message }); // botei pra aparecer a mensagem do erro pra ficar melhor de resolver 
  }
};

// Atualiza uma avaliação
exports.updateAvaliacao = async (req, res) => {
  try {
    const { id } = req.params; // parametro necessario que nem tem no spring
    const { descricao, nota } = req.body;
    const avaliacao = await Avaliacao.findByPk(id);
    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    await avaliacao.update({ descricao, nota });
    res.status(200).json(avaliacao);
  } catch (error) {
    console.error('Erro ao atualizar avaliação:', error); // Log do erro para o servidor
    res.status(500).json({ message: 'Erro ao atualizar avaliação', error: error.message }); // botei pra aparecer a mensagem do erro pra ficar melhor de resolver 
  }
};

// Deleta uma avaliação
exports.deleteAvaliacao = async (req, res) => {
  try {
    const { id } = req.params; // parametro necessario pra deletar, que nem tem no spring
    const avaliacao = await Avaliacao.findByPk(id);
    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada' });
    }
    await avaliacao.destroy();
    res.status(200).json({ message: 'Avaliação deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar avaliação:', error); // Log do erro para o servidor
    res.status(500).json({ message: 'Erro ao deletar avaliação', error: error.message }); // botei pra aparecer a mensagem do erro pra ficar melhor de resolver 
  }
};
