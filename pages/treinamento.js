
//funções da página de treinamento
var trainingActions = {
    goFormulario: function () {
        return this
            .useXpath()
            .waitForElementVisible('//li//a[contains(text(),"Formulário")]', 3000)
            .click('//li//a[contains(text(),"Formulário")]')
            .useCss()

    },
    goAddUser: function () {
        return this
            .waitForElementVisible('@usuario', 3000)
            .click('@usuario')
    }
}
//elementos da página treinamento
module.exports = {
    commands: [trainingActions],
    elements:{
        usuario: 'a[href="/users/new"]'
    }
}