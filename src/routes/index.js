const express = require('express');
const validateJwt = require('../middleware/jwtValidate');

const comunas = require('./comunas');
const propietarios = require('./propietarios');
const propiedades = require('./propiedades');
const alumnos = require('./alumnos');
const apoderados = require('./apoderados');
const relaciones = require('./relaciones');
const reservas = require('./reservas');
const usuarios = require('./usuarios');
const auth      = require('./auth');

const router = express.Router();

router.use('/comunas', comunas);
router.use('/propietarios', propietarios);
router.use('/propiedades', propiedades);
router.use('/alumnos', alumnos);
router.use('/apoderados', apoderados);
router.use('/relaciones',relaciones);
router.use('/reservas',validateJwt,reservas);
router.use('/usuarios',usuarios);
router.use('/auth',auth);

//router.use('/users', validateJwt, users);

module.exports = router;