const express = require('express');
const router = express.Router();
const avaliacaoController = require('../../controllers/Avaliacao/avaliacao'); // Importa os métodos do controller

// Define as rotas e conecta aos métodos do controller
router.get('/', avaliacaoController.getAllAvaliacoes); // Rota para listar todas as avaliações
router.post('/', avaliacaoController.createAvaliacao); // Rota para criar uma nova avaliação
router.get('/:id', avaliacaoController.getAvaliacaoById); // Rota para obter uma avaliação por ID
router.put('/:id', avaliacaoController.updateAvaliacao); // Rota para atualizar uma avaliação
router.delete('/:id', avaliacaoController.deleteAvaliacao); // Rota para deletar uma avaliação

module.exports = router; // Exporta as rotas para serem usadas no app principal
