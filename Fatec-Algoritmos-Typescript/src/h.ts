function separarPalavras(texto: string): string[] {
    const limpo = texto.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    return limpo.split(/\s+/).filter((p) => p.length > 0);
  }
  
  function contarVogais(texto: string): number {
    const vogais = "aeiouAEIOUáéíóúàèìòùãõâêîôûÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛ";
    let contador = 0;
    for (const char of texto) {
      if (vogais.includes(char)) contador++;
    }
    return contador;
  }
  
  function encontrarMaiorPalavra(palavras: string[]): string {
    if (palavras.length === 0) return "";
    let maior: string = palavras[0] as string;
    for (const palavra of palavras) {
      if (palavra.length > maior.length) maior = palavra;
    }
    return maior;
  }
  
  function gerarEstatisticas(texto: string) {
    const palavras = separarPalavras(texto);
    return {
      quantidadeCaracteres: texto.length,
      quantidadePalavras: palavras.length,
      maiorPalavra: encontrarMaiorPalavra(palavras),
      quantidadeVogais: contarVogais(texto),
    };
  }


  //casos de teste

  const textos: string[] = [
    "TypeScript é uma linguagem poderosa!",
    "A lógica de programação desenvolve o raciocínio.",
    "",
    "Olá, mundo!",
    ];
    for (const texto of textos) {
    const estatisticas = gerarEstatisticas(texto);
    console.log(`Texto: "${texto}"`);
    console.log(`Quantidade de caracteres: ${estatisticas.quantidadeCaracteres}`);
    console.log(`Quantidade de palavras: ${estatisticas.quantidadePalavras}`);
    console.log(`Maior palavra: ${estatisticas.maiorPalavra}`);
    console.log(`Quantidade de vogais: ${estatisticas.quantidadeVogais}`);
    console.log("-----------------------------");
    }