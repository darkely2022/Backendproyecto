const express = require('express');
const PropietariosController = require('../controllers/propietarios.controller');

const router = express.Router();

router.get('/:id', PropietariosController.findOne);

router.post('/', PropietariosController.SavePropietario);

module.exports = router;