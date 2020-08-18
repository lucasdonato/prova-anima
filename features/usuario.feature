#language: pt

Funcionalidade: Criar Usuario

  Contexto: Acessar a tela cadastro usuário
        Dado que acesso a tela de usuario

    Cenario: Validar cadastro com sucesso
        Dado que tenho preencho os dados do usuario com os seguintes dados:
            | nome             | Lucas                    |
            | ultimoNome       | Pereira                  |
            | email            | lucaspolimig96@gmail.com |
            | endereco         | Rua João Caetano 516     |
            | universidade     | UNA                      |
            | profissao        | QA                       |
            | genero           | Masculino                |
            | idade            | 24                       |

        Quando eu finalizado o cadastro
        Então devo ver a mensagem de sucesso ""