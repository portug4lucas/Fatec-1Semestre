function adicionarFrase(frases: string[], novaFrase: string): void {
    frases.push(novaFrase);
}

function removerFrase(frases: string[], indice: number): boolean {
    if (indice < 0 || indice >= frases.length) {
        return false;
    }
    frases.splice(indice, 1);
    return true;
}

function buscarFrases(frases: string[], palavra: string): string[] {
    const resultado: string[] = [];
    for (const frase of frases) {
        if (frase.toLowerCase().includes(palavra.toLowerCase())) {
            resultado.push(frase);
        }
    }
    return resultado;
}

function fraseAleatoria(frases: string[]): string | null {
    if (frases.length === 0) return null;
    const indice = Math.floor(Math.random() * frases.length);

    return frases[indice]!;
}

function listarFrases(frases: string[]): void {
    if (frases.length === 0) {
        console.log("Nenhuma frase cadastrada");
        return;
    }
    for (let i = 0; i < frases.length; i++) {
        console.log(i, frases[i]);
    }
}


//casos de teste

// Dados de teste
const frases: string[] = [
    "A persistência realiza o impossível.",
    "O sucesso é a soma de pequenos esforços diários.",
    "Nunca é tarde para aprender algo novo.",
    "A disciplina supera a motivação.",
    "Grandes resultados exigem constância."
    ];
    listarFrases(frases);
    console.log("-----------------------------");
    adicionarFrase(
    frases,
    "O conhecimento transforma realidades."
    );
    console.log("Frase adicionada.");
    listarFrases(frases);
    console.log("-----------------------------");
    const removeu = removerFrase(frases, 2);
    if (removeu) {
    console.log("Frase removida com sucesso.");
    } else {
    console.log("Índice inválido.");
    }
    listarFrases(frases);
    console.log("-----------------------------");
    const busca = buscarFrases(frases, "sucesso");
    console.log("Resultado da busca:");
    if (busca.length === 0) {
    console.log("Nenhuma frase encontrada.")
} else {
    for (const frase of busca) {
    console.log(frase);
    }
    }
    console.log("-----------------------------");
    const fraseSorteada = fraseAleatoria(frases);
    if (fraseSorteada !== null) {
    console.log("Frase aleatória:");
    console.log(fraseSorteada);
    }
    