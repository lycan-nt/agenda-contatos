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
                            "<td>" + data[i].nascimento + "</td>" +
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

    







