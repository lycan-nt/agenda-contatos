const express = require('express');
const bodyParse = require('body-parser')


const axios = require('axios');
const path = require('path');
const { stringify } = require('querystring');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view/index.html'));
    
}

exports.contatos = (req, res) => {
    const url = 'https://agendjango.herokuapp.com/api/pessoas/'

    axios.get(url)
        .then((response) => {
            console.log(response);

            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
        }) 
}

exports.contato = (req, res) => {
    const id = req.params.id;
    const url = `https://agendjango.herokuapp.com/api/pessoas/${id}`;

    axios.get(url)
        .then((response) => {
            console.log(response);

            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

exports.editContato = (req, res) => {
    const id = req.params.id;

    var config = {
        headers: {'X-My-Custom-Header': 'Header-Value'}
      };

      const editPessoa = {
        id: 7,
        nome: "Tivic",
        sobrenome: "Chagas",
        nascimento: "1998-02-05",
        email: "dwqdqw",
        foto: "",
        telefones: [
            5
        ],
        enderecos: []
    }
    const url = `https://agendjango.herokuapp.com/api/pessoas/${id}/`;

    axios.put(url, editPessoa)
        .then((response) => {
            //console.log(response)

           res.json({"Message": "OK"});
        })
        .catch((error) => {
            console.log('Vish: ' + error);
        })
}