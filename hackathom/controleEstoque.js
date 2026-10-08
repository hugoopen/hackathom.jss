const { question } = require('readline-sync')
let opcao
let consultarQuantidade = 0
let adicionarProduto = 0
let retiradaProduto = 0


while (opcao !== 4) {
    console.clear()
    console.log("===== Controle de Estoque =====");
    console.log("1 - Consultar estoque de produto");
    console.log("2 - Adicionar produto ao estoque");
    console.log("3 - Retirada de estoque");
    console.log("4 - Sair");

    opcao = Number(question("Qual opcao voce deseja:"))
    switch (opcao) {
        case 1:
            console.log(`Seu estoque atual é ${consultarQuantidade}`);
            question("\n Clique center para voltar ao menu.");
            break;

        case 2:
            adicionarProduto = Number(question("Digite o valor que sera adicionado ao estoque: "))
            console.log(`Estoque adicionado com sucesso! `);
            consultarQuantidade = consultarQuantidade + adicionarProduto
            question("\n Clique center para voltar ao menu.");
            break;

        case 3:
            retiradaProduto = Number(question("Digite o valor que voce quer retirar do estoque:"))
            if (retiradaProduto <= consultarQuantidade) {
                console.log("Quantidade retirada com sucesso.");
                consultarQuantidade = consultarQuantidade - retiradaProduto
            } else
                console.log("Digite um valor que ha realmente no estoque, por favor!");
            question("\n Clique center para voltar ao menu.");
            break;


        case 4:
            console.log("Encerramento do sistema...");
            break;


        default:
            console.log("Sistema fechado!");
            break;
    }

}
