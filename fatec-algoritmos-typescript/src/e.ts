function cifrarMensagem(mensagem: string, deslocamento: number): string {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let resultado = "";

     for (const char of mensagem) {

        if (alfabeto.includes(char)) {
          const posicao = alfabeto.indexOf(char);
          const novaPosicao = (posicao + deslocamento) % 26;
          resultado += alfabeto[novaPosicao];

        } else {
            resultado += char;
        }
     }
         return resultado
}       

function decifrarMensagem(mensagem: string, deslocamento: number): string {
    
    return cifrarMensagem(mensagem, 26 - deslocamento);

}  

// Dados de teste
const mensagem = "hello world";
const deslocamento = 3;

const cifrada = cifrarMensagem(mensagem, deslocamento);
console.log(`Mensagem original: ${mensagem}`);
console.log(`Mensagem cifrada: ${cifrada}`);

const decifrada = decifrarMensagem(cifrada, deslocamento);
console.log(`Mensagem decifrada: ${decifrada}`);