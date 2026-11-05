const readline = require('readline-sync'); 

let listaPedidos = [];
let pedidosJson = "";
let pedidosRecuperados = []; 


// FUNÇÃO PARA CADASTRAR PEDIDOS
function CadastrarPedido() {

console.log("\n NOVO PEDIDO ");
const numero = pedidosJson.length + 1
const cliente = readline.question("Nome do Cliente: ")

const produtos = [] 
    
let continuar = "s"

produtos.forEach(produto => {
    total += produto.quantidade * produto.preco
})

const novoPedido = {
     numero: numero,
     cliente: cliente,
     produtos: produtos,
     total: total,
     status: "Em preparo"
}


 pedidos.push(novoPedido)

 console.log("\nPedido cadastrado com sucesso!")
 console.log("Numero do pedido:", numero)
 console.log("Total: R$", total.tofixed(2))



// USANDO O WHILE
while (continuar.toLowerCase() --- "s") {
    console.log("/n --- Produto ---")

    const nome = readline.question("Nome do produto: ")
    const quantidade = readline.question("Quantidade: ")
    const preco = readline.question("Preco unitario: ")

    const produto = {
       nome: nome,
       quantidade: quantidade,
       preco: preco
    }
    produtos.push(produto)
    contiuar = readline.question (
        "\nDeseja adicionar outro produto? (s/n): "
    )
}
 }

 // FUNÇÃO PARA LISTAR OS PEDIDOS
 function ListarPedidos() {
    console.log("Listar os pedidos")
    console.log()

 }
// 

 // FUNÇÃO DE LISTAR PEDIDOS
 function ListarPedidos() {
    
 }

function menu() {
    while (true) {
        console.clear();
        console.log("/n====== LANCHONETE OSVALDO ======");
        console.log("1 - Cadastrar pedido");
        console.log("2 - Listar pedidos");
        console.log("3 - Exibir pedidos em JSON");
        console.log("4 - Recuperar pedidos do JSON");
        console.log("5 - Listar pedidos recuperados");
        console.log("6 - Sair");
    
        


        let opcao = readline.question("Escolha uma opcao: ");

        if(opcao === "1") {
          CadastrarPedido()
        
        } else if (opcao === "2") {
          ListarPedidos()

        } else if (opcao === "3") {
          ExibirProdutos()

        } else if (opcao === "4") {
          
        } else if (opcao === '6') {
         console.log("Saindo do sistema... Até logo!");
         break;
        } else  {
         readline.question("Opcao invalida! Pressione Enter para tentar novamente.");
        }



    }}
    console.log()