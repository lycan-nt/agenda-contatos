const route = require('./router');

const express = require('express');
const { urlencoded } = require('express');

//const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/view/'));

app.use('/', route);



app.listen(port, () => console.log('Server ON'));

