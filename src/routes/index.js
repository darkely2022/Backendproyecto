const express = require('express');
const validateJwt = require('../middleware/jwtValidate');

const comunas = require('./comunas');
const propietarios = require('./propietarios');
const propiedades = require('./propiedades');
const alumnos = require('./alumnos');

const router = express.Router();

router.use('/comunas', comunas);
router.use('/propietarios', propietarios);
router.use('/propiedades', propiedades);
router.use('/alumnos', alumnos);

//router.use('/users', validateJwt, users);

module.exports = router;