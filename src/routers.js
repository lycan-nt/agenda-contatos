const controller = require('./controller/controller');

const express = require('express');

const route = express.Router();


route.get('/', controller.home);


/*------------- Pessoa --------------*/
route.post('/novo', controller.inserir);

route.get('/contatos', controller.contatos);

route.get('/contato/:id', controller.contato);

route.put('/editcontato/:id', controller.editContato);

route.delete('/deletecontato/:id', controller.delete);

/*------------- Endereço-Pessoa --------------*/
route.post('/inserirendereco', controller.inserirEndereco)

route.put('/editendereco/:id', controller.editEndereco);

route.get('/consultarendereco/:id', controller.consultarEndereco);

/*------------- Relefone-Pessoa --------------*/
route.post('/novotelefone', controller.novoTelefone);

module.exports = route;