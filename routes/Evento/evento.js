const express = require('express');
const router = express.Router();
const eventoController = require('../../controllers/Evento/evento'); // Importa os métodos do controller


router.get('/', eventoController.getAllEventos); // Rota para listar todos os eventos
router.post('/', eventoController.createEvento); // Rota para criar um novo evento
router.get('/:id', eventoController.getEventoById); // Rota para obter um evento por ID
router.put('/:id', eventoController.updateEvento); // Rota para atualizar um evento
router.delete('/:id', eventoController.deleteEvento); // Rota para deletar um evento

module.exports = router; // Exporta as rotas para serem usadas no app principal
