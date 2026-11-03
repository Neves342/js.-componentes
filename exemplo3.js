function cadastrarUsuario(nome, idade) {
    try {

        if (nome.trim() === "") {
            throw new Error("O nome não pode ficar vazio!")
        }

        if (idade <= 0) {
            throw new Error ("Idade inválida!")
        }

        if (idade < 18) {
            throw new Error("Usuário precisa ser maior de idade!")
        }
        console.log("Usuário cadastrado com sucesso!")

    } catch (erro) {
       
    }

}