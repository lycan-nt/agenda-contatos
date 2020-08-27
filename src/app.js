const route = require('./routers');

const express = require('express');
const { urlencoded } = require('express');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/view/'));

app.use('/', route);



app.listen(port, () => console.log('Server ON'));

