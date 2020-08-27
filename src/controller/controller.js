const express = require('express');
const bodyParse = require('body-parser');
const axios = require('axios');
const path = require('path');

const { stringify } = require('querystring');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view/index.html'));
    
}

/*------------- Pessoa --------------*/

exports.inserir = (req, res) => {
    const url = 'https://agendjango.herokuapp.com/api/pessoas/'

    const novoContato = {
        nome: "Felipe",
        sobrenome: "D. Santos",
        nascimento: "1996-07-14",
        email: "felipe@teste.com.br",
        foto: "",
        telefones: [
            
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
        nome: "Felipe",
        sobrenome: "D. Santpos",
        nascimento: "1995-10-02",
        email: "felipedev@teste.com",
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


/*------------- Endereço-Pessoa --------------*/
exports.inserirEndereco = (req, res) => {
    const url = `https://agendjango.herokuapp.com/api/enderecos/`;

    const id = 15;

    const endereco = {
        id_pessoa: id,
        logradouro: "Teste POST",
        numero: "10",
        complemento: "POST 1",
        bairro: "Brasil",
        cep: "450000",
        cidade: "Conquista",
        uf: "BA",
        tipo: "2"
    }

    axios.post(url, endereco)
        .then((response) => {
            res.json({"Message: ": "Endereço registrado"});
        })
        .catch((error) => {
            res.json({"Message: ": "Desculpe algo deu errado!" + error});
        })

}

exports.editEndereco = (req, res) => {
    const id = req.params.id;

    const url = `https://agendjango.herokuapp.com/api/enderecos/${id}/`;

    const editEndereco = {
        // id: id,
        id_pessoa: 15,
        logradouro: "Editando",
        numero: "1000",
        complemento: "Editando",
        bairro: "Brasil",
        cep: "450000",
        cidade: "Conquista",
        uf: "BA",
        tipo: 2
    }

    axios.put(url, editEndereco)
        .then((response) => {
            res.json({ "Message: ":  "Registro alterado com sucesso" })
        })
        .catch((error) => {
            res.json({ "Message: ": "Desculpe algo deu errado! " + error });
        })

}