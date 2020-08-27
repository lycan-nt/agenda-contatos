const putElement = document.querySelector(".put");

putElement.addEventListener('click', () => {
    const editPessoa = {
        id: 7,
        nome: "TESTE-Front",
        sobrenome: "Chagas",
        nascimento: "1998-02-05",
        email: "dwqdqw",
        foto: "",
        telefones: [
            5
        ],
        enderecos: []
    }
    const url = `https://agendjango.herokuapp.com/api/pessoas/7/`;

    axios.put(url, editPessoa)
        .then((response) => {
            console.log(response.data)

           // res.send(response.data);
        })
        .catch((error) => {
            console.log('Vish: ' + error);
        })
})