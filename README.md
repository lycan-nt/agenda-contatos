# agenda-contatos
    Um projeto de cadastro e gerenciamento de contatos criado para o processo seletivo da Tivic.
    
<img src='https://github.com/lycan-nt/agenda-contatos/blob/master/Agenda-Tivicpng'>

## Algumas das funcionalidade no momento
    - Cadastrar contatos com todos os dados e com diversas regras de validação para evitar erros por parte do usuário
    - Na parte de cadastro de Endereço o campo UF e Cidade se comunicam com um API do IBGE fazendo com que o usuário não precise digitar esses campos e possa           selecioná los. 
    - No campo de cadastro de telefone existe um botão adicionar mais números que faz uma manipulação da dom criando novos campos de números para preencher e no          momento de salvar os dados o sistema verifica se o número de telefone está repetido avisa e remove os repetidos cadastrando apenas os corretos 
    - Todos os contatos aparecem em uma tabela listada do lado direito e ao adicionar um novo contato ele e listado também
    - Existe um campo de busca onde e possível digitar o nome e ele será filtrado
    
## Como testar
      Faça o download do projeto
      E preciso ter instalado na maquina o vscode e o nodejs
      Com os prerequisitos prontos abra o projeto no vs code 
      Abra o terminal do vscode na parte superior em Terminal > novo terminal
      Digite o comando npm install para instalar as dependencias do projeto
      Com todas as dependencias instaladas execulte o comando npm run devStart
      Em seu navegador digite 127.0.0.1:8080
      
 ## Expecificações tecnicas
      Construido com: NodeJS,html/css/javascript/ bootstrap/ express
      Tentei usar o maximo da arquitetura MVC e clean code
      Projeto criando pensando na armonia visual e responsividade com as diferentes telas deskitops 
 
 ## OBS: 
    Infelizmente não consegui a tempo implementar a edição e exclusão de contato toda a parte de CRUD funciona
    no back end da aplicação porem falto a implementação dessa parte no front
    assim como tambem não tive tempo de implantar um versão para aparelho movel 
    
 
 
 ## Desenvolvido por 
    Felipe D. Santos
 
 ## Agradecimentos
      Meus agradecimentos a Tivic e equipe pela oportunidade de participar do processo seletivo
