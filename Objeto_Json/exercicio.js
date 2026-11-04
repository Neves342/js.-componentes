const funcionario = {
   nome: "Larissa",
   cargo: "Diretora",
   salario: 1700
}


console.log(funcionario)

console.log("Original")
console.log(typeof funcionario)


const volta1 = JSON.stringify(funcionario)

console.log("Objeto convertido:")
console.log(typeof volta1)


// DISSERIALIZANDO O TEXTO
const volta = JSON.parse(volta1)

console.log("Objeto recuperado:")
console.log(volta)

// ACESSANDO OS DADOS RECUPERADOS
console.log(volta.nome)
console.log(volta.cargo)