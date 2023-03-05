const express = require('express');
const PropiedadesController = require('../controllers/propiedades.controller');

const router = express.Router();

router.get('/', PropiedadesController.list);
router.get('/:id', PropiedadesController.findOne);
router.post('/', PropiedadesController.Create);
// router.put('/:id', usersController.updateOne);
// router.delete('/:id', usersController.delete);

module.exports = router;