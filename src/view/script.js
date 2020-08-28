//Habilitando Cadastro
const btnNovo = document.querySelector(".novo");
const btnSalvar = document.querySelector(".salvar");

const inputNascimento = document.querySelector('#data');
const inputNome = document.querySelector('.input-nome');
const inputSobreNome = document.querySelector('.input-sobrenome');
const inputEmail = document.querySelector('.input-email');

btnNovo.addEventListener('click', () => {
    inputNascimento.disabled = false;
    inputNome.disabled = false;
    inputSobreNome.disabled = false;
    inputEmail.disabled = false;
    btnSalvar.disabled = false;
})

//Persistindo os dados
btnSalvar.addEventListener('click', () => {
    const url = 'http://127.0.0.1:8080/novo';

    console.log(inputEmail.value)

    const novoContato = {
            //"id": 34,
            nome: inputNome.value,
            sobrenome: inputSobreNome.value,
            nascimento: inputNascimento.value,
            email: inputEmail.value,
            foto: "",
            telefones: [],
            enderecos: []
    }

    console.log(novoContato.email);

    axios.post(url, novoContato)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
           console.log({ "Message: ": "Desulpe algo deu errado" + error })
        })
})