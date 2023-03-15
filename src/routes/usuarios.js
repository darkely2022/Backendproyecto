const express = require('express');
const UsuariosController = require('../controllers/usuarios.controller');

const router = express.Router();

router.get('/:id', UsuariosController.findOneUsuario);

router.get('/', UsuariosController.list);

router.post('/', UsuariosController.SaveUsuario);

router.post('/gettipo', UsuariosController.findOneUserPass);

module.exports = router;