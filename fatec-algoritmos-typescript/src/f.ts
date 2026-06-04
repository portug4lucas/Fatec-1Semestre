type Jogador = {
     nome: string
     pontuacao: number
     fase: number
}

function ordenarRanking(jogadores: Jogador[]): Jogador[] {

    for (let i = 0; i < jogadores.length - 1; i++) {

    for (let j = i + 1; j < jogadores.length; j++) {
        if (jogadores[j]!.pontuacao > jogadores[i]!.pontuacao) {
            const temp = jogadores[i]!;
            jogadores[i] = jogadores[j]!;
            jogadores[j] = temp;
}
    }
}
return jogadores

}

function exibirRanking(jogadores: Jogador[]): void {

    const ranking = ordenarRanking(jogadores);

      for (let i = 0; i < ranking.length; i++) {
        console.log(i + 1, ranking[i]!.nome, ranking[i]!.pontuacao)
      }
    }

function buscarCampeao(jogadores: Jogador[]): Jogador | null {
    if (jogadores.length === 0) return null;
    
    let campeao = jogadores[0]!;
    
    for (const jogador of jogadores) {
        if (jogador.pontuacao > campeao.pontuacao) {
            campeao = jogador;
        }
    }
    
    return campeao;
}

// Dados de teste
const jogadores: Jogador[] = [
{
nome: "Luna",
pontuacao: 8500,
fase: 12
},
{
nome: "Caio",
pontuacao: 7300,
fase: 10
},
{
    nome: "Maya",
pontuacao: 9200,
fase: 14
},
{
nome: "Ravi",
pontuacao: 6800,
fase: 9
},
{
nome: "Nina",
pontuacao: 9200,
fase: 13
}
];
exibirRanking(jogadores);
const campeao = buscarCampeao(jogadores);
if (campeao !== null) {
console.log(`Campeão: ${campeao.nome}`);
console.log(`Pontuação: ${campeao.pontuacao}`);
} else {
console.log("Não há jogadores cadastrados.");
}