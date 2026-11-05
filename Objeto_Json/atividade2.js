const readline = require('readline-sync'); 


let listaPedidos = [];
let listaRecuperada = [];
let proximoNumeroPedido = 101; 



function cadastrarPedido() {
    console.log("\n NOVO PEDIDO ");
    let nomeCliente = readline.question("Nome do cliente: ");
    let produtos = [];
    let valorTotalPedido = 0;

    
    while (true) {
        let nomeProduto = readline.question("Nome do produto (ou digite 'fim' para encerrar o pedido): ");
        if (nomeProduto.toLowerCase() === 'fim') break;

        let qtd = readline.questionInt("Quantidade: ");
        let precoUn = readline.questionFloat("Preco unitario: R$ ");

        let subtotal = qtd * precoUn;
        valorTotalPedido += subtotal;

        
        produtos.push({
            nome: nomeProduto,
            quantidade: qtd,
            preco: precoUn
        });
    }

    
    let novoPedido = {
        numero: proximoNumeroPedido++,
        cliente: nomeCliente,
        produtos: produtos,
        total: valorTotalPedido,
        status: "Em preparo"
    };

    listaPedidos.push(novoPedido);
    readline.question("\nPedido cadastrado com sucesso! Pressione Enter.");
}


function listarPedidos(arrayParaExibir, titulo) {
    console.log(`\n${titulo}`);
    if (arrayParaExibir.length === 0) {
        console.log("Nenhum pedido encontrado.");
    } else {
        arrayParaExibir.forEach(p => {
            console.log(`\nPedido N: ${p.numero} | Cliente: ${p.cliente} | Status: ${p.status}`);
            console.log("Produtos:");
            p.produtos.forEach(prod => {
                console.log(`  - ${prod.quantidade}x ${prod.nome} (R$ ${prod.preco.toFixed(2)} cada)`);
            });
            console.log(`Total: R$ ${p.total.toFixed(2)}`);
            console.log("-----------------------------------------");
        });
    }
    readline.question("\nPressione Enter para voltar ao menu.");
}


let stringJsonSalva = "";

function exibirJSON() {
    console.log("\n--- EXIBINDO E SERIALIZANDO PARA JSON ---");
    if (listaPedidos.length === 0) {
        console.log("Nao ha pedidos para transformar em JSON.");
    } else {
        // O método essencial do desafio: JSON.stringify
        stringJsonSalva = JSON.stringify(listaPedidos, null, 2); 
        console.log("Texto JSON gerado com sucesso:\n");
        console.log(stringJsonSalva);
    }
    readline.question("\nPressione Enter para voltar ao menu.");
}


function recuperarJSON() {
    console.log("\n--- RECUPERANDO DADOS DO JSON ---");
    if (!stringJsonSalva) {
        console.log("Nenhum JSON foi gerado ainda na Opcao 3!");
    } else {
        // O outro método essencial do desafio: JSON.parse
        listaRecuperada = JSON.parse(stringJsonSalva);
        console.log("Sucesso! O texto JSON foi convertido de volta para um Objeto/Array JavaScript.");
        console.log(`Foram recuperados ${listaRecuperada.length} pedido(s).`);
    }
    readline.question("\nPressione Enter para voltar ao menu.");
}


menu();

function menu() {
    while (true) {
        console.clear();
        console.log("========== LANCHONETE DELIVERY ==========");
        console.log("1 - Cadastrar pedido");
        console.log("2 - Listar pedidos");
        console.log("3 - Exibir pedidos em JSON (Serialização)");
        console.log("4 - Recuperar pedidos do JSON (Desserialização)");
        console.log("5 - Listar pedidos recuperados");
        console.log("6 - Sair");
        console.log("=========================================");
        
        let opcao = readline.question("Escolha uma opcao: ");

        if (opcao === '1') {
            cadastrarPedido();
        } else if (opcao === '2') {
            listarPedidos(listaPedidos, "--- PEDIDOS CADASTRADOS ---");
        } else if (opcao === '3') {
            exibirJSON();
        } else if (opcao === '4') {
            recuperarJSON();
        } else if (opcao === '5') {
            listarPedidos(listaRecuperada, "--- PEDIDOS RECUPERADOS DO JSON ---");
        } else if (opcao === '6') {
            console.log("Saindo do sistema... Até logo!");
            break;
        } else {
            readline.question("Opcao invalida! Pressione Enter para tentar novamente.");
        }
    }
}
