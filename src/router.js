const controllerPessoa = require('./controller/controllerPessoa');

const express = require('express');

const route = express.Router();

route.get('/', controllerPessoa.home);

route.get('/contatos', controllerPessoa.contatos);

route.get('/contato/:id', controllerPessoa.contato);



module.exports = route;