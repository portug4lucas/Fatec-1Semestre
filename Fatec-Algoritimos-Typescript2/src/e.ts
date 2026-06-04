type StatusTarefa = "pendente" | "concluída";

interface Tarefa {
    descricao: string;
    prioridade: number;
    status: StatusTarefa;
}

function adicionarTarefa(lista: Tarefa[], descricao: string, prioridade: number): void {
    const novaTarefa: Tarefa = {
        descricao: descricao,
        prioridade: prioridade,
        status: "pendente"
    };
    lista.push(novaTarefa);
}

function concluirTarefa(lista: Tarefa[], indice: number): boolean {
    if (indice < 0 || indice >= lista.length) {
        return false;
    }
    lista[indice]!.status = "concluída";
    return true;
}

function listarTarefas(lista: Tarefa[]): void {
    if (lista.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }
    for (let i = 0; i < lista.length; i++) {
        console.log(`Índice: ${i}`);
        console.log(`Descrição: ${lista[i]!.descricao}`);
        console.log(`Prioridade: ${lista[i]!.prioridade}`);
        console.log(`Status: ${lista[i]!.status}`);
    }
}

function listarPendentes(lista: Tarefa[]): void {
    let encontrou = false;
    for (const tarefa of lista) {
        if (tarefa.status === "pendente") {
            console.log(tarefa.descricao);
            console.log(tarefa.prioridade);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa pendente.");
    }
}

function buscarTarefas(lista: Tarefa[], palavra: string): Tarefa[] {
    const resultado: Tarefa[] = [];
    const palavraBuscada = palavra.toLowerCase();
    for (const tarefa of lista) {
        if (tarefa.descricao.toLowerCase().includes(palavraBuscada)) {
            resultado.push(tarefa);
        }
    }
    return resultado;
}


//casos de teste


const tarefas: Tarefa[] = [];
adicionarTarefa(tarefas, "Estudar TypeScript", 5);
adicionarTarefa(tarefas, "Resolver exercícios de algoritmos", 4);
adicionarTarefa(tarefas, "Preparar aula de programação", 3);
listarTarefas(tarefas);
concluirTarefa(tarefas, 1);
console.log("-----------------------------");
listarPendentes(tarefas);
console.log("-----------------------------");
const resultadoBusca = buscarTarefas(tarefas, "TypeScript");
console.log("Resultado da busca");
console.log("-----------------------------");
for (const tarefa of resultadoBusca) {
console.log(tarefa.descricao);
}