const express = require('express');
const router = express.Router();
const noticiaController = require('../../controllers/Noticia/noticia');

// Define as rotas para as notícias
router.get('/', noticiaController.getAllNoticias); // Listar todas as notícias
router.post('/', noticiaController.createNoticia); // Criar uma nova notícia
router.get('/:id', noticiaController.getNoticiaById); // Obter uma notícia por ID
router.put('/:id', noticiaController.updateNoticia); // Atualizar uma notícia
router.delete('/:id', noticiaController.deleteNoticia); // Deletar uma notícia

module.exports = router;
