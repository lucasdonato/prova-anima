

const { client } = require('nightwatch-api')
const { Then, Given, When, Before } = require('cucumber');

let home = client.page.home()
let treinamento = client.page.treinamento()

/*acessa a página home e depois 
a página de automação web*/
Before(function () {
    home.go()
    return home.goWeb()
});

Given('que acesso a tela de usuario', function () {
    treinamento.goFormulario()
    treinamento.goAddUser()
});

Given('que tenho preencho os dados do usuario com os seguintes dados:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('eu finalizado o cadastro', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('devo ver a mensagem de sucesso {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
