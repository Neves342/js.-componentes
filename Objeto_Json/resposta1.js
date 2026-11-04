const readline = require("readline-sync")

// FUNÇÃO PARA CADASTRAR JOGOS
function cadastrarJogo() {

console.log("\n--- CADASTRAR JOGO ---")

const nome = readline.question("Nome do jogo: ")
const categoria = readline.question("Categoria: ")
const ano = readline.question("Ano de lancamento: ")

const disponibilidade = readline.question(
    "Disponivel? (s/n): "
)


//CRIANDO UM OBJETO COM OS DADOS INFORMADOS 

const novoJogo = {
    nome: nome,
    categoria: categoria,
    ano: ano,
    disponivel: disponibilidade.tolowerCase() --- ""
}


function listarJogos() {
    
    console.log("Nenhum jogo cadastrado.")
    return
}

listarJogos.forEach((jogo, indice) => {

    console.log("\nJogo:", indice + 1)
    console.log("Nome:", jogo.nome)
    console.log("Categoria:", jogo.categoria)
    console.log("Ano:", jogo.ano)
    console.log("Disponivel:", jogo.disponivel ? "Sim" : "Não")
})

function serializarDados() {

   console.log("\n--- SERIALIZACAO JSON ---")

   if (listarJogos.length === 0) {
    console.log("Não existem jogos para serializar.")
    return
   }


   //TRANSFROMANDO O ARRAY DE OBJETOS EM TEXTO JSON
   dadosJSON = JSON.stringify(jogos)
   

   console.log("\nDados transformados em JSON:")
   console.log(dadosJSON)

   console.log("\nTipo original:", typeof jogos)
   console.log(dadosJSON)

   console.log()
   console.log("\n---")


function desserializador() {
    console.log("/n--- DESSERIALIZACAO JSON ---")


    if (dadosJSON === "") {
        console.log("Primeiro, serialize os dados")
        return
    }

    try {

        // TRANSFORMANDO O TEXTO JSON NOVAMENTE EM ARRAY
        const jogosRecuperados = JSON.parse(dadosJSON)

        console.log("\nDados recuperados:")

        jogosRecuperados.forEach((jogo, indice) => {

            console.log("\nJogo:", indice +1)
            console.log("Nome:", jogo.nome)
            console.log("Categoria:", jogo.categoria)
            console.log("Ano:", jogo.ano)
            console.log("Disponível:", jogo.disponivel ? "Sim" : "Não")

        })


        console.log("\nTipo do texto JSON:", typeof dadosJSON)
        console.log("Tipo recuperado:", typeof jogosRecuperados)

        console.log("\nDesserializacao realizada com sucesso!")
    }

}

}

}

while (true) {

    console.log("\n===== SISTEMA DE JOGOS =====")
    console.log("1 - Cadastrar jogo")
    console.log("2 - Listar jogos")
    console.log("3 - Serializar dados (JSON.stringify)")
    console.log("4 - Desserializar dados (JSON.parse)")
    console.log("5 - Sair")

    const opcao = readline.questionInt("\nEscolha uma opcao: ")

    switch (opcao) {

        case 1:
            cadastrarJogo()
            break

        case 2:
            listarJogos()
            break


        case 3:
            serializarDados()
            break
        
        case 4:
            desserializador()
            break

        case 5:
            Sair()
            break

        default


    }
}