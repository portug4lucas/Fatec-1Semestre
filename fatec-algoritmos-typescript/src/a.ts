function normalizarTexto(texto: string): string {
    const textoMinuscula = texto.toLowerCase();
    const textoSemAcentos = textoMinuscula.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const textoSemEspacos = textoSemAcentos.replace(/\s/g, "");
    const textoSemPontuacao = textoSemEspacos.replace(/[^0-9a-z]/g, "");
    return textoSemPontuacao;
}

function ehPalindromo(texto: string): boolean {
    const normalizado = normalizarTexto(texto);
    return normalizado === normalizado.split("").reverse().join("");
}

const frases: string[] = [
    "A grama é amarga",
    "Roma me tem amor",
    "Socorram-me subi no ônibus em Marrocos",
    "TypeScript é legal",
    "Ana"
];

for (const frase of frases) {
    const resultado = ehPalindromo(frase);

    console.log(`Frase: "${frase}"`);

    if (resultado) {
        console.log("Resultado: É um palíndromo");
    } else {
        console.log("Resultado: Não é um palíndromo");
    }

    console.log("-----------------------------");
}