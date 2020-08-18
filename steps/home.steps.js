
const { client } = require('nightwatch-api')
const { Then, Given } = require('cucumber')

//instância do page objects
const home = client.page.home()

Given('que acesso a tela home', function () {
  return home.go()
});

Then('devo ver a area de {string} e {string}', function (textoWeb, textoApi) {
  return home.validaAcesso(textoWeb, textoApi)
});

Then('devo ver a URL {string}', function (url) {
  return home.expectedUrl(url)
});


