/*Adcionar campos para inserir mais telefônes*/
const buttonAdicionarTelefone = document.querySelector('.adicionarmais');

buttonAdicionarTelefone.addEventListener('click', () => {
    event.preventDefault();

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
    novosNumeros.appendChild(inputNumero);

    const labelTipo = document.createElement('label');
    const textLabelTipo = document.createTextNode('Tipo');
    labelTipo.setAttribute('class','label-tipo');
    labelTipo.appendChild(textLabelTipo);
    novosNumeros.appendChild(labelTipo);

    const selectNumero = document.createElement('select');
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
})

/*Fim mais telefones*/