const produto = {
    nome: "Notebook",
    preco: 3500,
    disponivel: true
}

//OBJETO ORIGINAL
console.log("Objeto original: ")
console.log(produto)

console.log(typeof produto)

// SERIALIZAÇÃO
const produtoTexto = JSON.stringify(produto)

//RESULTADO DA SERIALIZAÇÃO
console.log("Objeto convertido:")
console.log(typeof produtoTexto)

// TRANSFORMANDO UM OBJETO EM UMA STRING