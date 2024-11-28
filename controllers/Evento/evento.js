const express = require('express');
const router = express.Router();
const { Eventos, Membro } = require('../models');
const { Op } = require('sequelize');

// Criar um novo evento
router.post('/add/evento', async (req, res) => {
    try {
        const evento = await Eventos.create(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o evento.', error: error.message });
    }
});

// Listar todos os eventos
router.get('/list/eventos', async (req, res) => {
    try {
        const eventos = await Eventos.findAll();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar eventos.', error: error.message });
    }
});

// Buscar eventos por título
router.get('/list/titulo/:titulo', async (req, res) => {
    try {
        const eventos = await Eventos.findAll({
            where: { titulo: { [Op.like]: `%${req.params.titulo}%` } }
        });
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar eventos pelo título.', error: error.message });
    }
});

// Buscar eventos por publicador
router.get('/list/publicador/:publicadorId', async (req, res) => {
    try {
        const eventos = await Eventos.findAll({
            where: { publicadorEventosId: req.params.publicadorId },
            include: [{ model: Membro }]
        });
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar eventos pelo publicador.', error: error.message });
    }
});

// Buscar eventos por descrição
router.get('/list/descricao/:descricao', async (req, res) => {
    try {
        const eventos = await Eventos.findAll({
            where: { descricao: { [Op.like]: `%${req.params.descricao}%` } }
        });
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar eventos pela descrição.', error: error.message });
    }
});

// Buscar eventos por arquivosMidia
router.get('/list/arquivosMidia/:arquivosMidia', async (req, res) => {
    try {
        const eventos = await Eventos.findAll({
            where: { arquivosMidia: { [Op.like]: `%${req.params.arquivosMidia}%` } }
        });
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar eventos por arquivos de mídia.', error: error.message });
    }
});

// Deletar um evento por ID
router.delete('/delete/evento/:id', async (req, res) => {
    try {
        const result = await Eventos.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Evento não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o evento.', error: error.message });
    }
});

// Atualizar um evento por ID
router.put('/update/:id', async (req, res) => {
    try {
        const evento = await Eventos.findByPk(req.params.id);
        if (evento) {
            await evento.update(req.body);
            res.status(200).json(evento);
        } else {
            res.status(404).json({ message: 'Evento não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o evento.', error: error.message });
    }
});

module.exports = router;
