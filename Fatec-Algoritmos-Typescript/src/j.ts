function compactarTexto(texto: string): string {
    if (texto.length === 0) return "";
  
    let resultado = "";
    let caractereAtual = texto[0] as string;  // <-- adiciona o "as string"
    let contador = 1;
  
    for (let i = 1; i < texto.length; i++) {
      if (texto[i] === caractereAtual) {
        contador++;
      } else {
        resultado += caractereAtual + contador;
        caractereAtual = texto[i] as string;  // <-- e aqui também
        contador = 1;
      }
    }
  
    resultado += caractereAtual + contador;
    return resultado;
  }


  //casos de teste

  const textos: string[] = [
    "aaabbcdddd",
    "aaaaa",
    "abc",
    "",
    "xxxyyyzzzz",
    "AABBCCCC"
    ];
    for (const texto of textos) {
    const compactado = compactarTexto(texto);
    console.log(`Texto original: "${texto}"`);
    console.log(`Texto compactado: "${compactado}"`);
    console.log("-----------------------------");
    }