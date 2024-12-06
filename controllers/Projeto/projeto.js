const { sequelize } = require('../../models');

const Projeto = require('../../models/Projeto/projeto')(sequelize);
console.log(Projeto)

exports.getAllProjetos = async (req, res) => {
    try {
        const projetos = await Projeto.findAll();
        res.status(200).json(projetos);
    } catch (error) {
        console.error('Error ao buscar projetos:', error);
        res.status(500).json({ message: 'Erro ao buscar projetos', error: error.message });
    }
}

exports.createProjeto = async (req, res) => {
    try {
        const {titulo, descricao, anexoImagens, arquivoPdf} = req.body;
        const projeto = await Projeto.create({
            titulo,
            descricao,
            anexoImagens,
            arquivoPdf
        });
        res.status(201).json(projeto);
    } catch (error) {
        console.error('Erro ao criar projetos:', error);
        res.status(500).json({ message: 'Erro ao criar projeto', error: error.message });
    }
};

exports.getProjetoById = async (req, res) => {
    try{
        const { id } = req.params;
        const projeto = await Projeto.findByPk(id);
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto não encontrada' });
        }
        res.status(200).json(projeto);
    } catch (error) {
        console.error('Error ao buscar projetos:', error);
        res.status(500).json({ message: 'Erro ao buscar projetos', error: error.message })
    }
};

exports.updateProjeto = async (req, res) => {
    try{
        const { id } = req.params;
        const { titulo, descricao, anexoImagens, arquivoPdf } = req.body;
        const projeto = await Projeto.findByPk(id);
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto nao encontrado' });
        }
        await projeto.update({ titulo, descricao, anexoImagens, arquivoPdf });
        res.status(200).json(projeto);
    } catch (error) {
        console.error('Erro ao atualizar projeto:', error);
        res.status(500).json({ message: 'Erro ao atualizar projeto', error: error.message });
    }
};

exports.deleteProjeto = async (req, res) => {
    try {
        const { id } = req.params;
        const projeto = await Projeto.findByPk(id);
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto delatada com sucesso' });
        }
        await projeto.destroy();
        res.status(200).json({ message: 'deletada com sucesso' });
    } catch (error) {
        console.error('Error ao deletar projeto: ', error);
        res.status(500).json({ message: 'Erro ao deletar projeto', error: error.message });
    }
};