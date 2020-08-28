//Habilitando Cadastro
const btnNovo = document.querySelector(".novo");
const btnSalvar = document.querySelector(".salvar");

const inputNacimento = document.querySelector('#data');
const inputNome = document.querySelector('.input-nome');
const inputSobreNome = document.querySelector('.input-sobrenome');
const inputEmail = document.querySelector('.input-email');

btnNovo.addEventListener('click', () => {
    inputNacimento.disabled = false;
    inputNome.disabled = false;
    inputSobreNome.disabled = false;
    inputEmail.disabled = false;
    btnSalvar.disabled = false;
})