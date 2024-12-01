const express = require('express');
const usuarioController = require('../../controllers/Usuario/usuario'); 

const router = express.Router();

// Define as rotas e conecta aos métodos do controller Usuário
router.get('/', usuarioController.getAllUsuarios); // Rota para listar todos os usuários
router.get('/:id', usuarioController.getUsuarioById); // Rota para buscar pelo id
router.get('/nome/:nomeMembro', usuarioController.getUsuarioByNome); // Rota para buscar pelo nome
router.get('/contato/:contato', usuarioController.getUsuarioByContato); // Rota para buscar por contato
router.get('/email/:email', usuarioController.getUsuarioByEmail); // Rota para buscar por email
router.post('/add', usuarioController.createUsuario); // Rota para criar um novo usuário
router.put('/update/:id', usuarioController.updateUsuario); // Rota para atualizar informações do usuário pelo id
router.delete('/delete/:id', usuarioController.deleteUsuario); // Rota para deletar um usuário pelo id

module.exports = router; 
