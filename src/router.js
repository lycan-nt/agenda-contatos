const controllerPessoa = require('./controller/controllerPessoa');

const express = require('express');

const route = express.Router();


route.get('/', controllerPessoa.home);

route.post('/novo', controllerPessoa.inserir);

route.get('/contatos', controllerPessoa.contatos);

route.get('/contato/:id', controllerPessoa.contato);

route.put('/editcontato/:id', controllerPessoa.editContato);

route.delete('/deletecontato/:id', controllerPessoa.delete);

module.exports = route;