const express = require('express');
const bodyParse = require('body-parser')


const axios = require('axios');
const path = require('path');
const { stringify } = require('querystring');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view/index.html'));
    
}

exports.inserir = (req, res) => {
    const url = 'https://agendjango.herokuapp.com/api/pessoas/'

    const novoContato = {
        nome: "Felipe",
        sobrenome: "D. Santos",
        nascimento: "1995-10-02",
        email: "felipe@teste.com.br",
        foto: "",
        telefones: [
            5
        ],
        enderecos: []
    }

    axios.post(url, novoContato)
        .then((response) => {
            res.json({ "Message": "Novo contato criado com sucesso!" });
        })
        .catch((error) => {
            res.json({ "Message: ": "Desulpe algo deu errado" })
        })
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
           res.json({"Message": "Registro Alterado com sucesso!"});
        })
        .catch((error) => {
            console.log('Um problema ocorreu: ' + error);
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    const url = `https://agendjango.herokuapp.com/api/pessoas/${id}`;

    axios.delete(url)
        .then((response) => {
            res.json({ "Message: ": "Registro deletado com sucesso" });
        })
        .catch((error) => {
            res.json({"Algo deu errado: ": error });
        })
}