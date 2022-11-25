const express = require('express');
const api = express.Router();
const propietarioController = require('../controllers/propietarioController');

api.post('/propietarioModel', propietarioController.createPropietario);
api.get('/propietarioModels', propietarioController.getPropietarios);
api.delete('/propietarioModel/delete/:id', propietarioController.deletePropietario);
api.get('/propietarioModel/search/:id', propietarioController.getPropietarioPorCasa);

module.exports = api;