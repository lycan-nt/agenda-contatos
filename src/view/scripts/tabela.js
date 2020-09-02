/* ----------Script para recuperar dados & popular tabela & fazer consulta ---------- */
    const tBody = document.querySelector('tbody');

    const recuperaDados = async () => {
        const url = 'http://127.0.0.1:8080/contatos/';

        return await axios.get(url)
            .then(({ data }) => {

                const popular = () => {
                    for (var i = 0; i < data.length; i++)
                    {
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

    
document.querySelector(".buscar").addEventListener('keyup', () => {
   var coluna = "1";
   var filtrar, tabela, tr, td, th, i;

   filtrar = document.querySelector(".buscar");
   filtrar = filtrar.value.toUpperCase();

   tabela = document.querySelector(".table");

   tr = tabela.getElementsByTagName("tr");

   th = tabela.getElementsByTagName("th");

   for (i = 0; i < tr.length; i++)
   {
       td = tr[i].getElementsByTagName("td")[coluna];

       if (td) 
       {
           if (td.innerHTML.toUpperCase().indexOf(filtrar) > -1)
           {
               tr[i].style.display = '';
           } 
           else
           {
            tr[i].style.display = 'none';
           }
       }

   }
});

/*-------------------------------------Fim Script--------------------------------------*/

/*---------------------------------Selecionando e pegando campos da tabela------------------------*/
const tabelaHTML = document.getElementById('listagemTable');
tabelaHTML.addEventListener('click', selecionarLinha );

function selecionarLinha() {
    event.preventDefault();

    const tabela = document.getElementById('listagemTable');
    const linhas = tabela.getElementsByTagName('tr');

    limparCampos();
    desabilitarCampos();
    limparNumeros();
    
    for (let i = 0; i < linhas.length; i++)
    {
        const linha = linhas[i];

        linha.addEventListener('click', function() {
            linhaSelecionada(this, false);
        })
    }

    function linhaSelecionada(linha) {
        const linhas = linha.parentElement.getElementsByTagName('tr');

        for (let i = 0; i < linhas.length; i++)
        {
            const linha_ = linhas[i];

            linha_.classList.remove("selecionado");
        }

        linha.classList.toggle("selecionado");

        const selecao = tabelaHTML.getElementsByClassName("selecionado");

        var id = "";

        for (let i = 0; i < selecao.length; i++)
        {
            var selecionado = selecao[i];
            selecionado = selecionado.getElementsByTagName("td");

            id = selecionado[0].innerHTML;

            
        }

        idPessoa = id;

       

        //Chamada GET para carregar os dados no menu esquerdo
        const url = `http://127.0.0.1:8080/contato/${idPessoa}`;

        //Dados Pessoa
        axios.get(url)
            .then(({ data }) => {

                const inputNascimento = document.querySelector('#data');
                const inputNome = document.querySelector('.input-nome');
                const inputSobreNome = document.querySelector('.input-sobrenome');
                const inputEmail = document.querySelector('.input-email');

                inputNascimento.value = data.nascimento;
                inputNome.value = data.nome;
                inputSobreNome.value = data.sobrenome;
                inputEmail.value = data.email;

                //Dados Endereço da pessoa
                if (data.enderecos.length > 0)
                {
 
                    const inputLogradouro = document.querySelector("#logradouro");
                    const inputNumero = document.querySelector("#numero");
                    const inputBairro = document.querySelector("#bairro");
                    const inputTipo = document.querySelector("select[name=tipo]");
                    const inputCep = document.querySelector("#cep");
                    const inputComplemento = document.querySelector("#complemento");
                    const inputUf = document.querySelector("select[name=uf]");
                    const inputCidade = document.querySelector("select[name=cidade]");

                    for( let i = 0; i < data.enderecos.length; i++)
                    {
                        const idEndereco = data.enderecos[i];
                        const urlEnd = `http://127.0.0.1:8080/consultarendereco/${idEndereco}/`;

                        axios.get(urlEnd)
                        .then(({ data }) => {

                            inputLogradouro.value = data.logradouro;
                            inputNumero.value = data.numero;
                            inputBairro.value = data.bairro;
                            inputTipo.value = data.tipo;
                            inputCep.value = data.cep;
                            inputComplemento.value = data.complemento;
                            inputUf.value = data.uf;
                            inputCidade.innerHTML += `<option selected value="${data.cidade}">${data.cidade}</option>`                          

                        })
                        .catch((error) => {
                            console.log(`Não foi possivel carregar os dados obtidos na tabela: ${error}`)
                        })

                    }
 
                }

                //Dados Telefone da pessoa
                if (data.telefones.length > 0) {

                    if (data.telefones.length > 1)
                    {
                        limparNumeros();
                        let qtdNumeros = 0;
                        qtdNumeros =  data.telefones.length - 1;
                        for (let i = 0; i < qtdNumeros; i++)
                        {
                            if (i == qtdNumeros)
                            {
                                return
                            }
                                
                            addNumeros();
                        }

                    }

                    const inputNumeroTelefone = document.querySelectorAll("#numeroTelefone");
                    const inputTipoTelefone = document.querySelectorAll("select[name=tipoTelefone]");

                    for (let i = 0; i < data.telefones.length; i++) {
                        const idTelefone = data.telefones[i];
                        const urlTelefone = `http://127.0.0.1:8080/consultatelefone/${idTelefone}`

                        axios(urlTelefone)
                            .then(({ data }) => {
                                
                                inputNumeroTelefone[i].value = data.numero;
                                inputNumeroTelefone[i].disabled = true;

                                inputTipoTelefone[i].value = data.tipo;
                                inputTipoTelefone[i].disabled = true;
                            })
                            .catch((error) => {
                                console.log(`Não foi possivel carregar os dados obtidos na tabela: ${error}`)
                            })
                    }

                }  

                //Habilitar os botões para editar/deletar
                const editDelete = document.querySelector('.edit-delete');
                const novo = document.querySelector('.novo');
                const cacelarEdit = document.querySelector('.cancelar-edit');
                const salvar = document.querySelector('.salvar');
                const salvarEdit = document.querySelector('.salvar-edit');

                editDelete.style.display = 'block';

                editDelete.addEventListener('click', () => {
 
                    novo.style.display = 'none';

                    cacelarEdit.style.display = 'block';

                    salvar.style.display = 'none';

                    salvarEdit.style.display = 'block';

                    habilitarCampos();
                })

                cacelarEdit.addEventListener('click', () => {
                    event.preventDefault();

                    salvar.style.display = 'block';
                    novo.style.display = 'block';

                    editDelete.style.display = 'none';
                    salvarEdit.style.display = 'none';


                    cacelarEdit.style.display = 'none';

                 
                    desabilitarCampos();

                })

            })
            .catch((error) => {
                console.log(`Não foi possivel carregar os dados obtidos na tabela: ${error}`)
            })
    }
}

/*-------------------------------------Fim Script--------------------------------------*/