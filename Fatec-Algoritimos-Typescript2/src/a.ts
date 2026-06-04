interface EstatisticasTurma {
    media: number
    maiorNota: number
    menorNota: number
    quantidadeAprovados: number
    quantidadeReprovados: number
}

function calcularMedia(notas: number[]): number {
    let soma = 0

    for (const nota of notas) {
        soma += nota
    }
    return soma/notas.length
}

function contarAprovados(notas: number[]): number {
    let aprovados = 0

    for (const nota of notas) {
        if (nota >= 6)
        aprovados++
    }
    return aprovados
}

function contarReprovados(notas: number[]): number {
    let reprovados = 0

    for (const nota of notas) {
        if (nota < 6)
        reprovados++
    }
    return reprovados
}

function encontrarMaiorNota(notas: number[]): number {
    let maior = notas[0]!
    
    for (const nota of notas) {
        if (nota > maior)
        maior = nota
    }
    return maior
}

function encontrarMenorNota(notas: number[]): number {
    let menor = notas[0]!
    
    for (const nota of notas) {
        if (nota < menor)
        menor = nota
    }
    return menor
}

function analisarTurma(notas: number[]): EstatisticasTurma {
    const estatisticas: EstatisticasTurma = {
        media: calcularMedia(notas),
        maiorNota: encontrarMaiorNota(notas),
        menorNota: encontrarMenorNota(notas),
        quantidadeAprovados: contarAprovados(notas),
        quantidadeReprovados: contarReprovados(notas),
    }
    return estatisticas
}


//casos de teste

const notasTurma: number[] = [
    8.5, 7.0, 5.5, 9.2, 4.8, 6.0, 3.7, 10.0, 6.5, 2.9,
    ];
    const estatisticas = analisarTurma(notasTurma);
    console.log("Notas da turma:");
    console.log(notasTurma);
    console.log("-----------------------------");
    console.log(`Média da turma: ${estatisticas.media.toFixed(2)}`);
    console.log(`Maior nota: ${estatisticas.maiorNota}`);
    console.log(`Menor nota: ${estatisticas.menorNota}`)
    console.log(`Quantidade de aprovados: ${estatisticas.quantidadeAprovados}`);
    console.log(`Quantidade de reprovados: ${estatisticas.quantidadeReprovados}`);
