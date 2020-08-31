
//Recuperando elementos da DOM & Habilitando Cadastros
const tabCadastro = document.querySelector("#tb1");
const btnNovo = document.querySelector(".novo");
const btnSalvar = document.querySelector(".salvar");
// const buttonAdicionarTelefone = document.querySelector('.adicionarmais');


//Pessoa
const inputNascimento = document.querySelector('#data');
const inputNome = document.querySelector('.input-nome');
const inputSobreNome = document.querySelector('.input-sobrenome');
const inputEmail = document.querySelector('.input-email');

//Endereço
const inputLogradouro = document.querySelector("#logradouro");
const inputNumero = document.querySelector("#numero");
const inputBairro = document.querySelector("#bairro");
const inputTipo = document.querySelector("select[name=tipo]");
const inputCep = document.querySelector("#cep");
const inputComplemento = document.querySelector("#complemento");
const inputUf = document.querySelector("select[name=uf]");
const inputCidade = document.querySelector("select[name=cidade]");

//Telefone
const inputNumeroTelefone = document.querySelector("#numeroTelefone");
const inputTipoTelefone = document.querySelector("select[name=tipoTelefone]");

btnNovo.addEventListener('click', () => {
    inputNascimento.disabled = false;
    inputNome.disabled = false;
    inputSobreNome.disabled = false;
    inputEmail.disabled = false;
    btnSalvar.disabled = false;
    buttonAdicionarTelefone.disabled = false;

    inputLogradouro.disabled = false;
    inputNumero.disabled = false;
    inputBairro.disabled = false;
    inputTipo.disabled = false;
    inputCep.disabled = false;
    inputComplemento.disabled = false;
    inputUf.disabled = false;

    inputNumeroTelefone.disabled = false;
    inputTipoTelefone.disabled = false;
})

//Persistindo os dados
btnSalvar.addEventListener('click', () => {
    event.preventDefault();

    //Regras de validação
    function valida_form() {
        const email = inputEmail.value;
        const nome = inputNome.value;
        const sobrenome = inputSobreNome.value;
        const nascimento = inputNascimento.value;

        const logradouro = inputLogradouro.value;
        const numero = inputNumero.value;
        const bairro = inputBairro.value;
        const tipo = inputTipo.value;
        const cep = inputCep.value;
        const complemento = inputComplemento.value;
        const uf = inputUf.value;
        const cidade = inputCidade.value;

        const numeroTelefone = inputNumeroTelefone.value;
        const tipoTelefone = inputTipoTelefone.value;

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

                    /* ----------Script para recuperar dados & popular tabela & fazer consulta ---------- */
                    const tBody = document.querySelector('tbody');

                    const recuperaDados = async () => {
                        const url = 'http://127.0.0.1:8080/contatos/';
        
                        return await axios.get(url)
                            .then(({ data }) => {
                               const dataNascimento = data[3].nascimento;
        
                                const popular = () => {
                                    tBody.innerHTML = '' ;
                                    for (var i = 0; i < data.length; i++) {
                                        var tr = "<tr>" +
                                            "<td>" + data[i].id + "</td>" +
                                            "<td>" + data[i].nome + "</td>" +
                                            "<td>" + data[i].sobrenome + "</td>" +
                                            "<td>" + data[i].nascimento.substr(0, 10).split('-').reverse().join('/') + "</td>" +
                                            "<td>" + data[i].email + "</td>" +
                                            "</tr>"
                                            
                                        
                                             tBody.innerHTML += tr;
        
                                    }
        
                                    var tr = tBody.childNodes;
                                }
                                popular();
        
                            })
                            .catch((error) => {
                                console.log("Falha ao carregar os dados");
                            })
                    }
                    const dados = recuperaDados();
        
                    /*Fim do script para recuperar dados e acrescentar na tabela*/

            const contato = response.data;
            const idPessoa = contato.id;
            
            //Verificado regras de endereço e salvando
            function validaEnderecoTelefone() {

                if (logradouro != '' && numero != '' && bairro != '' && tipo != '')
                {
                    const url = "http://127.0.0.1:8080/inserirendereco";

                    const novoEndereco = {
                        idPessoa,
                        logradouro,
                        numero,
                        bairro,
                        tipo,
                        cep,
                        complemento,
                        uf,
                        cidade
                    }
                    axios.post(url, novoEndereco)
                        .then((response) => {
                            console.log({ "Message:": "Endereço registro!"});
                        })
                        .catch((error) => {
                            console.log({ "Message: ": "Ocorreu um erro: " + error });
                        })
                }
                else
                {
                    if(cep != '' || complemento != '' || uf != '' || cidade != '')
                    {
                        alert("Atenção!! O endereço do contato só sera salvo caso os campos (Logradouro / Numero/ Bairro) estejam preenchidos, você podera consultar e alterar o cadastro posteriormente para adicionar o endereço");
                        return;
                    }

                }

                //Validando regra de validação de telefone e salvado
                const novoTelefone = {
                    idPessoa,
                    numeroTelefone,
                    tipoTelefone
                }

                if (numeroTelefone != '')
                {
                    const url = 'http://127.0.0.1:8080/novotelefone';
                    /*Begin TESTE*/
                    const addNumber = document.querySelectorAll('#numeroTelefone');
                    const addTipo = document.querySelectorAll('select[name=tipoTelefone]');

                    if (addNumber.length > 1)
                    {
                       const dadosTelefones = addTelefone(idPessoa);
                       dadosTelefones[0].numeroTelefone = numeroTelefone;
                       dadosTelefones[0].tipoTelefone = tipoTelefone;

                        for (var i = 0; i < dadosTelefones.length; i++) {

                            for (var j = 0; j < dadosTelefones.length; j++)
                            {

                                if (dadosTelefones[i].numeroTelefone == dadosTelefones[j + 1].numeroTelefone) 
                                {
                                    alert("Atenção! os numeros de telefône não podem se repetir, os numeros repetido serão removidos.");
                                    
                                    dadosTelefones[j + 1].numeroTelefone = '';
                                }
                                
                                if (j == dadosTelefones.length);
                                {
                                    const dadosTelefonesUnicos = dadosTelefones.filter(function(este, i) {
                                        return dadosTelefones.indexOf(este) === i;
                                    });
                                    console.log(dadosTelefonesUnicos[0])

                                    for (var post = 0; post < dadosTelefonesUnicos.length; post++)
                                    {
                                        axios.post(url, dadosTelefonesUnicos[post])
                                            .then((response) => {
                                                console.log(`Numeros de telefônes registrados com sucesso!`);
                                            })
                                            .catch((error) => {
                                                console.log(`Erro ao tentar inserir mais de um numero de telefône`);
                                            })
                                    }
            
                                    console.log(`Aqui os dados tratados: ${dadosTelefonesUnicos}`);
                                    console.log('Fim do telefone')
                                    recuperaDados();
                                    return;
                                }


                            }

                        }

                    }
                    else
                    {
                        axios.post(url, novoTelefone)
                            .then((response) => {
                                console.log({"Message: ": "Telefône registrado"});
                            })
                            .catch((error) => {
                                console.log({ "Message: ": "Algo deu errado " + error });
                                alert("Telefône")
                            }) 

                            recuperaDados();
                    }
                    /*END TESTE*/
                    // const url = 'http://127.0.0.1:8080/novotelefone';

                    // axios.post(url, novoTelefone)
                    //     .then((response) => {
                    //         console.log({"Message: ": "Telefône registrado"});
                    //     })
                    //     .catch((error) => {
                    //         console.log({ "Message: ": "Algo deu errado " + error });
                    //         alert("Telefône")
                    //     })
                }
            }
            validaEnderecoTelefone();
            
            alert("Novo contato criado com sucesso!");
        })
        .catch((error) => {
           console.log({ "Message: ": "Desulpe algo deu errado" + error })
        });



    //Limpando e desabilitando campos
    inputNome.value = ''
    inputSobreNome.value = ''
    inputNascimento.value = ''
    inputEmail.value = ''

    inputLogradouro.value = '';
    inputNumero.value = '';;
    inputCep.value = '';
    inputComplemento.value = '';
    inputUf.value = '';
    inputCidade.value = '';
    inputBairro.value = '';

    inputNumeroTelefone.value = '';
    inputTipoTelefone.value = '';

    inputNascimento.disabled = true;
    inputNome.disabled = true;
    inputSobreNome.disabled = true;
    inputEmail.disabled = true;
    btnSalvar.disabled = true;
    buttonAdicionarTelefone.disabled = true;

    inputLogradouro.disabled = true;
    inputNumero.disabled = true;
    inputBairro.disabled = true;
    inputTipo.disabled = true;
    inputCep.disabled = true;
    inputComplemento.disabled = true;
    inputUf.disabled = true;
    inputCidade.disabled = true;

    inputNumeroTelefone.disabled = true;
    inputTipoTelefone.disabled = true;

    tabCadastro.checked = true;

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
                    ufSelect.innerHTML += `<option class=${state.sigla} value="${state.sigla}">${state.sigla}</option>`
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