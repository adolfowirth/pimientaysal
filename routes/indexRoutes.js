const express = require('express');
const routes= express.Router();

const indexController = require('../controllers/indexController');

routes.get('/', indexController.index);
routes.get('/detalle/:id', indexController.detalle);

module.exports = routes;