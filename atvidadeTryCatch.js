const readline = require("readline-sync"); 


const livros = [ 
    { 
        titulo: "JavaScript para Iniciantes", 
        autor: "Carlos Silva", 
        categoria: "Programação", 
        disponivel: true 
    }, 
    { 
        titulo: "Python Básico", 
        autor: "Ana Souza", 
        categoria: "Programação", 
        disponivel: true 
    }, 
    { 
        titulo: "Banco de Dados", 
        autor: "Pedro Santos", 
        categoria: "Tecnologia", 
        disponivel: false 
    } 

]   




function cadastrarLivro(nome, autor, categoria) {

   let nome = readline.question("Digite o nome do livro: ")
   let autor = readline.question("Digite o autor dele: ")
   let categoria = readline.question("Digite a categoria: ")


try {

    if (nome() === "") {
        throw new Error("O título não pode ficar vazio.")
    }

    console.log("Cadastro realizado!")

    if (autor === "" ) {
            throw new Error("O autor não pode ficar vazio.")
        }

    if (categoria === "") {
        throw new Error("A categoria não pode ficar vazia")
    }

    // validar


  } catch (erro) {

    console.log("Erro: " + erro.message)

    //adicionar ao array


}}


function listarLivros(livros) {
    for (let i = 0; i < livros.length; i++)
        console.log(livros[i])

    }

function consultarLivro() {
    
}


function emprestarLivro(){


}


function devolverLivro(){


}



// While e Case

while (opcao) {
    console.log("\n==== Biblioteca ====")
    console.log("1 - Cadastrar um livro")
    console.log("2 - Lista dos livros ")
    console.log("3 - Consultar livro ")
    console.log("4 - Emprestar livro")
    console.log("5 - Devolver livro")
    console.log("6 - Sair do sistema")
  

opcao = Number(entrada.question("Escolha uma opcao (1-5): "))


switch (opcao) {

    case "1":
        cadastrarLivro()
        break

    case "2":
        listarLivros()
        break

    case "3":
        consultarLivro()
        break

    case "4":
        emprestarLivro()
        break

    case "5":
        devolverLivro()
        break


    case "6":
        Sair()

    default:
        console.log("Opção inválida!")
    
}

}






//  try {

//   if (nome.trim() === "") {
//       throw new Error("O nome não pode ficar vazio!")
//   }

// }






// console.log("1 - Faca a busca do seu livro: ");
// console.log("2 - Filtre os livros que estao disponiveis: ");
// console.log("3 - Filtre sua busca pelo autor da obra!: ");
// console.log("4 - Livros Indisponiveis");
// console.log("5 - Veja se todos estao disponiveis: ");
// console.log("6 - Veja o titulo e o autor da obra: ");
// console.log("7 - Veja a quantidade de paginas de todas as obras: ");
// console.log("8 - Verifique o ano de publicacao de cada livro: ");
// console.log("10 - Sair do sistema!?: ");