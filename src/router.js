const controller = require('./controller/controller');

const express = require('express');

const route = express.Router();

route.get('/', controller.home);


module.exports = route;