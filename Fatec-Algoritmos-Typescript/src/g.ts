function limparCPF(cpf: string): string {
  return cpf.replace(/\./g, "").replace(/-/g, "").replace(/ /g, "");
}
 
function cpfPossuiApenasNumeros(cpf: string): boolean {
  for (const caractere of cpf) {
    if (isNaN(Number(caractere)) || caractere === " ") {
      return false;
    }
  }
  return true;
}
 
function cpfTemTodosDigitosIguais(cpf: string): boolean {
  const primeiro = cpf[0];
  for (const caractere of cpf) {
    if (caractere !== primeiro) {
      return false;
    }
  }
  return true;
}
 
function validarCPF(cpf: string): boolean {
  const cpfLimpo = limparCPF(cpf);
 
  if (cpfLimpo.length !== 11) {
    return false;
  }
 
  if (cpfPossuiApenasNumeros(cpfLimpo) === false) {
    return false;
  }
 
  if (cpfTemTodosDigitosIguais(cpfLimpo)) {
    return false;
  }
 
  return true;
}
 
 //Casos de teste:
const cpfs: string[] = [
"123.456.789-10",
"111.111.111-11",
"12345678910",
"123.456.789",
"123.456.789-AA",
"00000000000",
"987.654.321-00"
];
for (const cpf of cpfs) {
const resultado = validarCPF(cpf);
console.log(`CPF: ${cpf}`);
if (resultado) {
console.log("Resultado: CPF válido no formato simplificado");
} else {
console.log("Resultado: CPF inválido");
}
console.log("-----------------------------");
}