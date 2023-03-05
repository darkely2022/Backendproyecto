const express = require('express');
const AlumnosController = require('../controllers/alumnos.controller');

const router = express.Router();

router.get('/:id', AlumnosController.findOne);

router.post('/', AlumnosController.SaveAlumno);

module.exports = router;