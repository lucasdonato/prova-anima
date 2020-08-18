#language: pt

Funcionalidade: Tela Home

  Contexto: Acessar tela home
        Dado que acesso a tela home
    
    Cenario: Validar Acesso Automacao        
        Então devo ver a area de "Automação de Web" e "Automação de Api Rest"

    Cenario: Validar URL
        Então devo ver a URL "https://automacaocombatista.herokuapp.com/home/index"