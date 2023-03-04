const express = require('express');
//const validateJwt = require('../middleware/jwtValidate');

const comunas = require('./comunas');

const router = express.Router();

router.use('/comunas', comunas);

//router.use('/users', validateJwt, users);

module.exports = router;