const controller = require('./controller/controller');

const express = require('express');

const route = express.Router();

route.get('/', controller.home);

route.get('/contatos', controller.contatos);

route.get('/contato/', controller.contato);


module.exports = route;