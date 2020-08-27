const axios = require('axios');
const path = require('path');

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
    const id = 2;
    const url = `https://agendjango.herokuapp.com/api/pessoas/${id}`;

    axios.get(url)
        .then((response) => {
            console.log(response);

            res.send(response.data);
        })
}