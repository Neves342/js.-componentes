const aluno = {
    nome: "Mariana",
    idade: 21,
    curso: "Desenvolvimento de Sistemas"
}

// TRASNFORMANDO O OBJETO EM TEXTO JSON
const alunoJSON = JSON.stringify(aluno)


console.log(alunoJSON)


// OBSERVE A DIFERENÇA:
console.log(typeof aluno)
// OBJECT

console.log(typeof alunoJSON)
//STRING

