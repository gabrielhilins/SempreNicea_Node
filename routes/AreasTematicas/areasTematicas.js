const express = require('express');
const router = express.Router();
const areasTematicasController = require('../../controllers/AreasTematicas/areasTematicas'); // Corrija para o caminho correto do controlador

// Define as rotas e conecta aos métodos do controlador
router.get('/', areasTematicasController.getAllAreasTematicas); 
router.post('/', areasTematicasController.createAreaTematica); 
router.get('/:id', areasTematicasController.getAreaTematicaById); 
router.put('/:id', areasTematicasController.updateAreaTematica);
router.delete('/:id', areasTematicasController.deleteAreaTematica);

module.exports = router;
