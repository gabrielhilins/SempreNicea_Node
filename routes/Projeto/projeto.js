const express = require('express');
const router = express.Router();
const projetoController = require('../../controllers/Projeto/projeto');

router.get('/get', projetoController.getAllProjetos);
router.get('/get/:id', projetoController.getProjetoById);
router.post('/create', projetoController.createProjeto);
router.put('/update/:id', projetoController.updateProjeto);
router.delete('/delete/:id', projetoController.deleteProjeto)

module.exports = router;