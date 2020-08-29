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
    event.preventDefault();

    //Regras de validação
    function valida_form() {
        var email = inputEmail.value;
        var nome = inputNome.value;
        var sobrenome = inputSobreNome.value;
        var nascimento = inputNascimento.value;

        if (email == '' || nome == '' || sobrenome == '' || nascimento == '')
        {
            alert('Atenção todos os campos devem ser preenchidos!');

            return;
        }

        if (nome == sobrenome)
        {

            inputNome.focus();

            alert('O nome e o sobrenome não podem ser iguais.');

            return;
        }

        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) 
        {
            alert('Por favor, digite um endereço de e-mail válido');

            inputEmail.focus();

            return;
        }
        
    //Chamando o back end
    const url = 'http://127.0.0.1:8080/novo';

    const novoContato = {
            nome: inputNome.value,
            sobrenome: inputSobreNome.value,
            nascimento: inputNascimento.value,
            email: inputEmail.value,
            foto: "",
            telefones: [],
            enderecos: []
    }

    axios.post(url, novoContato)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
           console.log({ "Message: ": "Desulpe algo deu errado" + error })
        });

    inputNome.value = ''
    inputSobreNome.value = ''
    inputNascimento.value = ''
    inputEmail.value = ''

    inputNascimento.disabled = true;
    inputNome.disabled = true;
    inputSobreNome.disabled = true;
    inputEmail.disabled = true;
    btnSalvar.disabled = true;



    }
    valida_form();

});

    //Gerando Estado e cidade via API
    function UFs() {
        const ufSelect = document.querySelector("select[name=uf]");
    
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then( res => res.json() )
            .then( states => {
                for(const state of states) {
                    ufSelect.innerHTML += `<option value="${state.id}">${state.sigla}</option>`
                }
               
            } );
    }
    UFs();

    function getCidades(event) {
        const cidadeSelect = document.querySelector("select[name=cidade]");
        const ufInput = document.querySelector("input[name=uf]");
    
        const ufValue = event.target.value;
    
        const index = event.target.selectedIndex;
    
        ufInput.value = event.target.options[index].text;
    
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
        cidadeSelect.innerHTML = "<option value>Selecione a Cidade</option>";
        cidadeSelect.disabled = true;
    
        fetch(url)
            .then( res => res.json() )
            .then( cidades => {
                
                for( const cidade of cidades) {
                    cidadeSelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
                }
    
                cidadeSelect.disabled = false;
    
            })
    }
    
    document.querySelector("select[name=uf]")
        .addEventListener("change", getCidades);