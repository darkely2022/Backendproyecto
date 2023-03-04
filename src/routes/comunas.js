const express = require('express');
const ComunasController = require('../controllers/comunas.controller');

const router = express.Router();

router.get('/', ComunasController.list);
// router.get('/:id', usersController.findOne);
//router.post('/', usersController.create);
// router.put('/:id', usersController.updateOne);
// router.delete('/:id', usersController.delete);

module.exports = router;