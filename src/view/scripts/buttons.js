    //Limpando Campos
    const limparCampos = () => {
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
    }

    //Desabilitando Campos
    const desabilitarCampos = () => {
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


/*Adicionar campos para inserir mais telefônes*/
const buttonAdicionarTelefone = document.querySelector('.adicionarmais');
const novosNumeros = document.querySelector('.novos-numeros');

const addNumeros = () => {
    const novosNumeros = document.querySelector('.novos-numeros');

    const hr = document.createElement('hr');
    hr.setAttribute('class', 'hr-numeros');
    novosNumeros.appendChild(hr);

    const labelNumero = document.createElement('label');
    const textLabel = document.createTextNode('Numero');
    labelNumero.appendChild(textLabel);
    novosNumeros.appendChild(labelNumero);

    const inputNumero = document.createElement('input');
    inputNumero.setAttribute('class', 'input-numero');
    inputNumero.setAttribute('id', 'numeroTelefone');
    novosNumeros.appendChild(inputNumero);

    const labelTipo = document.createElement('label');
    const textLabelTipo = document.createTextNode('Tipo');
    labelTipo.setAttribute('class','label-tipo');
    labelTipo.appendChild(textLabelTipo);
    novosNumeros.appendChild(labelTipo);

    const selectNumero = document.createElement('select');
    selectNumero.setAttribute('name', 'tipoTelefone');
    const optionNumeroCelular = document.createElement('option');
    optionNumeroCelular.setAttribute('value', 1);
    const textCelular = document.createTextNode('Celular');
    optionNumeroCelular.appendChild(textCelular);
    selectNumero.appendChild(optionNumeroCelular);
    novosNumeros.appendChild(selectNumero);

    const optionNumeroComercial = document.createElement('option');
    optionNumeroComercial.setAttribute('value', 2);
    const textComercial = document.createTextNode('Comercial');
    optionNumeroComercial.appendChild(textComercial);
    selectNumero.appendChild(optionNumeroComercial);
    novosNumeros.appendChild(selectNumero);

    const optionNumeroFax = document.createElement('option');
    optionNumeroFax.setAttribute('value', 3);
    const textFax = document.createTextNode('Fax');
    optionNumeroFax.appendChild(textFax);
    selectNumero.appendChild(optionNumeroFax);
    novosNumeros.appendChild(selectNumero);

    const optionNumeroResidencial = document.createElement('option');
    optionNumeroResidencial.setAttribute('value', 4);
    const textResidencial = document.createTextNode('Residencial');
    optionNumeroResidencial.appendChild(textResidencial);
    selectNumero.appendChild(optionNumeroResidencial);
    novosNumeros.appendChild(selectNumero);
}

buttonAdicionarTelefone.addEventListener('click', (valorTeste) => {
    event.preventDefault();

    addNumeros();
    

});

/*Fim mais telefones campos*/

//Criando objeto com os dados de telefone
const addTelefone = (idPessoa) => {
    const addNumber = document.querySelectorAll('#numeroTelefone');
    const addTipo = document.querySelectorAll('select[name=tipoTelefone]');

    const arrNumero = Array.prototype.slice.call(addNumber);
    const arrTipo = Array.prototype.slice.call(addTipo);

    const arrTelefones = [];

    for (i = 0; i < arrNumero.length; i++)
    {

        arrTelefones.push({
            idPessoa: idPessoa,
            numeroTelefone: arrNumero[i].value,
            tipoTelefone: arrTipo[i].value
        })
        
    }

    return arrTelefones;
}


//Limpar campos de telefone
const limparNumeros = () => {
    novosNumeros.innerHTML = ''
}

