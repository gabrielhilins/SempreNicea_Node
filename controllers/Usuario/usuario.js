const Usuario = require('../../models/Usuario//usuario');
console.log(Usuario);

// Buscar id
exports.getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Usuário não encontrado com este id:', error);
        res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
    }
};

// Buscar por nome
exports.getUsuarioByNome = async (req, res) => {
    try {
        const { nomeUsuario } = req.params;
        const usuario = await Usuario.findOne({ where: { nomeUsuario } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Erro ao buscar o usuário por nome:', error);
        res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
    }
};

// Buscar por contato
exports.getUsuarioByContato = async (req, res) => {
    try {
        const { contato } = req.params;
        const usuario = await Usuario.findOne({ where: { contato } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Erro ao buscar o usuário por contato:', error);
        res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
    }
};

// Buscar por email
exports.getUsuarioByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Erro ao buscar o usuário por email:', error);
        res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
    }
};

// Listar todos os usuários
exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Erro ao listar todos os usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar todos os usuários', error: error.message });
    }
};

// Criar usuário
exports.createUsuario = async (req, res) => {
    try {
        const { nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil, tipo } = req.body;
        const novoUsuario = await Usuario.create({ nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil });
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao criar o usuário:', error);
        res.status(500).json({ message: 'Erro ao criar o usuário', error: error.message });
    }
};

// Atualizar usuário
exports.updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil } = req.body;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await usuario.update({ nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil });
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Erro ao atualizar informações do usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar o usuário', error: error.message });
    }
};

// Deletar usuário
exports.deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await usuario.destroy();
        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar o usuário:', error);
        res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
    }
};
