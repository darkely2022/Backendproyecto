const express = require('express');
const RelacionesController = require('../controllers/relaciones.controller');

const router = express.Router();

router.get('/', RelacionesController.findOne);

router.post('/', RelacionesController.SaveRelacion);

module.exports = router;