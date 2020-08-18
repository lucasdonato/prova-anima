
//funções da página home
var homeActions = {
    go: function () {
        return this
            .navigate()
    },
    expectedUrl: function (url) {
        return this
            .expect.url().to.contain(url)
    },
    validaAcesso: function (textoWeb, textoApi){
        return this
        .assert.containsText('@cardWeb', textoWeb)
        .assert.containsText('@cardApi', textoApi)
    },
}

//elementos da página home
module.exports = {
    url: '/home/index',
    commands: [homeActions],
    elements: {
        cardWeb : '#index-banner h4',
        cardApi: '#index-banner2 h4'
    }
}