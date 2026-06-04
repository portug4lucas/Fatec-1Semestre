import PromptSync = require("prompt-sync");
const prompt = PromptSync();

type Cliente = {
    nome: string;
    idade: number;
    gestante: boolean;
};

const filaNormal: Cliente[] = [];
const filaPreferencial: Cliente[] = [];
let proximoAtendimentoPreferencial: boolean = false;
let opcao: number = 99;

while (opcao !== 0) {
    console.log("\n=== Gerenciador de filas ===\n1 - Cadastrar cliente\n2 - Atender cliente\n3 - Listar filas\n0 - Sair");
    opcao = Number(prompt("Opcao:"));

    if (opcao === 1) {
        criarCliente();
    } else if (opcao === 2) {
        atenderCliente();
    } else if (opcao === 3) {
        exibirFilas();
    } else if (opcao === 0) {
        console.log("Sistema encerrado");
    } else {
        console.log("Opção inválida");
    }
}

function criarCliente() {
    const nome = prompt("Nome: ") ?? "";
const idade = prompt("Idade: ") ?? "";
const gestante = prompt("Gestante? (s/n) ") ?? "";
    const cliente: Cliente = {
        nome: nome.trim(),
        idade: Number(idade.trim()),
        gestante: gestante.trim() === 's'
    };

    if (cliente.idade > 60 || cliente.gestante === true) {
        filaPreferencial.push(cliente);
        console.log("Fila preferencial.");
    } else {
        filaNormal.push(cliente);
        console.log("Fila normal.");
    }
}

function exibirFilas() {
    console.log("\nFila normal:");
    for (let i = 0; i < filaNormal.length; i++) {
        console.log(`${i + 1} - ${filaNormal[i]?.nome}`);
    }
    console.log("\nFila preferencial:");
    for (let i = 0; i < filaPreferencial.length; i++) {
        console.log(`${i + 1} - ${filaPreferencial[i]?.nome}`);
    }
}

function atenderCliente() {
    if (filaNormal.length === 0 && filaPreferencial.length === 0) {
        console.log("Não há clientes nas filas.");
    } else if (filaNormal.length === 0) {
        const atendido = filaPreferencial.shift();
        proximoAtendimentoPreferencial = false;
        console.log(`Cliente atendido: ${atendido?.nome}`);
    } else if (filaPreferencial.length === 0) {
        const atendido = filaNormal.shift();
        proximoAtendimentoPreferencial = true;
        console.log(`Cliente atendido: ${atendido?.nome}`);
    } else {
        if (proximoAtendimentoPreferencial === true) {
            const atendido = filaPreferencial.shift();
            proximoAtendimentoPreferencial = false;
            console.log(`Cliente atendido: ${atendido?.nome}`);
        } else {
            const atendido = filaNormal.shift();
            proximoAtendimentoPreferencial = true;
            console.log(`Cliente atendido: ${atendido?.nome}`);
        }
    }
}