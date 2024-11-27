const Noticia = require('../../models/Noticia/noticia');
const AreasTematicas = require('../../models/AreasTematicas/areasTematicas');
const Membro = require('../../models/Membro/membro');

// Retorna todas as notícias
exports.getAllNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.findAll({
      include: [
        { model: AreasTematicas, as: 'areaTematica' },
        { model: Membro, as: 'autor' },
      ],
    });
    res.status(200).json(noticias);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    res.status(500).json({ message: 'Erro ao buscar notícias', error: error.message });
  }
};

// Cria uma nova notícia
exports.createNoticia = async (req, res) => {
  try {
    const { titulo, conteudo, membro_id, area_tematica_id } = req.body;
    const noticia = await Noticia.create({
      titulo,
      conteudo,
      membro_id,
      area_tematica_id,
      dataPublicacao: new Date(),
    });
    res.status(201).json(noticia);
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    res.status(500).json({ message: 'Erro ao criar notícia', error: error.message });
  }
};

// Busca uma notícia por ID
exports.getNoticiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const noticia = await Noticia.findByPk(id, {
      include: [
        { model: AreasTematicas, as: 'areaTematica' },
        { model: Membro, as: 'autor' },
      ],
    });
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
    const { titulo, conteudo, area_tematica_id } = req.body;
    const noticia = await Noticia.findByPk(id);
    if (!noticia) {
      return res.status(404).json({ message: 'Notícia não encontrada' });
    }
    await noticia.update({ titulo, conteudo, area_tematica_id });
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
