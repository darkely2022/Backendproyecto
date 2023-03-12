const express = require('express');
const ReservasController = require('../controllers/reservas.controller');

const router = express.Router();

router.get('/:id', ReservasController.findReservasAlumno);
router.get('/pro/:idpro', ReservasController.findReservasPropietario);
router.post('/', ReservasController.SaveReserva);

module.exports = router;