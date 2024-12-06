const { sequelize } = require('../../models');
const Noticia = require('../../models/Noticia/noticia')(sequelize);
const Membro = require('../../models/Membro/membro')(sequelize);

// Retorna todas as notícias com os dados do publicador
exports.getAllNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.findAll();
    res.status(200).json(noticias);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    res.status(500).json({ message: 'Erro ao buscar notícias', error: error.message });
  }
};

// Cria uma nova notícia
exports.createNoticia = async (req, res) => {
  try {
    const { titulo, conteudo, membro_id } = req.body;

    // Valida se o membro existe antes de criar a notícia
    const membro = await Membro.findByPk(membro_id);
    if (!membro) {
      return res.status(404).json({ message: 'Membro associado não encontrado' });
    }

    const noticia = await Noticia.create({
      titulo,
      conteudo,
      membro_id,
      dataPublicacao: new Date(),
    });

    res.status(201).json(noticia);
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    res.status(500).json({ message: 'Erro ao criar notícia', error: error.message });
  }
};

// Busca uma notícia por ID com os dados do publicador
exports.getNoticiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const noticia = await Noticia.findByPk(id);

    if (!noticia) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }

    res.status(200).json(noticia);
  } catch (error) {
    console.error('Erro ao buscar notícia:', error);
    res.status(500).json({ message: 'Erro ao buscar notícia', error: error.message });
  }
};

// Atualiza uma notícia
exports.updateNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }

    await noticia.update({ titulo, conteudo });

    res.status(200).json(noticia);
  } catch (error) {
    console.error('Erro ao atualizar notícia:', error);
    res.status(500).json({ message: 'Erro ao atualizar notícia', error: error.message });
  }
};

// Deleta uma notícia
exports.deleteNoticia = async (req, res) => {
  try {
    const { id } = req.params;

    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }

    await noticia.destroy();

    res.status(200).json({ message: 'Notícia deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar notícia:', error);
    res.status(500).json({ message: 'Erro ao deletar notícia', error: error.message });
  }
};
