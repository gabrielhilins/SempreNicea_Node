const AreasTematicas = require('../../models/AreasTematicas/areastematicas');


console.log(AreasTematicas);

exports.getAllAreasTematicas = async (req, res) => {
  try {
    const areasTematicas = await AreasTematicas.findAll();
    res.status(200).json(areasTematicas);
  } catch (error) {
    console.error('Erro ao buscar áreas temáticas:', error);
    res.status(500).json({ message: 'Erro ao buscar áreas temáticas', error: error.message });
  }
};

exports.createAreaTematica = async (req, res) => {
  try {
    const { titulo, descricao, dataInicio, dataTermino, tempoTotal } = req.body;
    const areaTematica = await AreasTematicas.create({
      titulo,
      descricao,
      dataInicio,
      dataTermino,
      tempoTotal,
    });
    res.status(201).json(areaTematica);
  } catch (error) {
    console.error('Erro ao criar área temática:', error);
    res.status(500).json({ message: 'Erro ao criar área temática', error: error.message });
  }
};

exports.getAreaTematicaById = async (req, res) => {
  try {
    const { id } = req.params; 
    const areaTematica = await AreasTematicas.findByPk(id);
    if (!areaTematica) {
      return res.status(404).json({ message: 'Área temática não encontrada' });
    }
    res.status(200).json(areaTematica);
  } catch (error) {
    console.error('Erro ao buscar área temática:', error);
    res.status(500).json({ message: 'Erro ao buscar área temática', error: error.message });
  }
};

exports.updateAreaTematica = async (req, res) => {
  try {
    const { id } = req.params; 
    const { titulo, descricao, dataInicio, dataTermino, tempoTotal } = req.body;
    const areaTematica = await AreasTematicas.findByPk(id);
    if (!areaTematica) {
      return res.status(404).json({ message: 'Área temática não encontrada' });
    }
    await areaTematica.update({ titulo, descricao, dataInicio, dataTermino, tempoTotal });
    res.status(200).json(areaTematica);
  } catch (error) {
    console.error('Erro ao atualizar área temática:', error);
    res.status(500).json({ message: 'Erro ao atualizar área temática', error: error.message });
  }
};

// Deleta uma área temática
exports.deleteAreaTematica = async (req, res) => {
  try {
    const { id } = req.params;
    const areaTematica = await AreasTematicas.findByPk(id);
    if (!areaTematica) {
      return res.status(404).json({ message: 'Área temática não encontrada' });
    }
    await areaTematica.destroy();
    res.status(200).json({ message: 'Área temática deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar área temática:', error);
    res.status(500).json({ message: 'Erro ao deletar área temática', error: error.message });
  }
};