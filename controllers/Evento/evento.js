const { sequelize } = require('../../models');

const Evento = require('../../models/Evento/evento')(sequelize); // Importa o modelo
console.log(Evento); 

// Retorna todos os eventos
exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).json({ message: 'Erro ao buscar eventos', error: error.message });
  }
};

// Cria um novo evento
exports.createEvento = async (req, res) => {
  try {
    const { titulo, descricao, arquivosMidia, dataEvento, publicadorEventosId } = req.body;
    const evento = await Evento.create({
      titulo,
      descricao,
      arquivosMidia,
      dataEvento,
      publicadorEventosId,
      dataPublicado: new Date(), // Define a data de publicação automaticamente
    });
    res.status(201).json(evento);
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    res.status(500).json({ message: 'Erro ao criar evento', error: error.message });
  }
};

// Busca um evento por ID
exports.getEventoById = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    console.error('Erro ao buscar evento por ID:', error);
    res.status(500).json({ message: 'Erro ao buscar evento', error: error.message });
  }
};

// Atualiza um evento
exports.updateEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, arquivosMidia, dataEvento } = req.body;
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    await evento.update({ titulo, descricao, arquivosMidia, dataEvento });
    res.status(200).json(evento);
  } catch (error) {
    console.error('Erro ao atualizar evento:', error);
    res.status(500).json({ message: 'Erro ao atualizar evento', error: error.message });
  }
};

// Deleta um evento
exports.deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    await evento.destroy();
    res.status(200).json({ message: 'Evento deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar evento:', error);
    res.status(500).json({ message: 'Erro ao deletar evento', error: error.message });
  }
};
