const express = require('express');
const ApoderadosController = require('../controllers/apoderados.controller');

const router = express.Router();

router.get('/:id', ApoderadosController.findOne);

router.post('/', ApoderadosController.SaveApoderado);

module.exports = router;