const inputCep = document.getElementById("cep");
const resultado = document.getElementById("resultado");

function limparResultado() {
  resultado.textContent = "";
  resultado.className = "resultado";
}

function mostrarCarregando() {
  resultado.textContent = "Consultando CEP...";
  resultado.className = "resultado carregando";
}

function mostrarErro(mensagem) {
  resultado.textContent = mensagem;
  resultado.className = "resultado erro";
}

function mostrarSucesso(dados) {
  resultado.className = "resultado sucesso";
  resultado.innerHTML = `
    <p><strong>CEP:</strong> ${dados.cep}</p>
    <p><strong>Logradouro:</strong> ${dados.logradouro || "—"}</p>
    <p><strong>Bairro:</strong> ${dados.bairro || "—"}</p>
    <p><strong>Cidade:</strong> ${dados.localidade}</p>
    <p><strong>UF:</strong> ${dados.uf}</p>
  `;
}

async function consultarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    mostrarErro("CEP inválido. Digite 8 dígitos.");
    return;
  }

  mostrarCarregando();

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = await response.json();

    if (dados.erro) {
      mostrarErro("CEP não encontrado.");
      return;
    }

    mostrarSucesso(dados);
  } catch (error) {
    mostrarErro("Erro ao consultar o CEP. Tente novamente.");
  }
}

inputCep.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cep = inputCep.value.trim();
    if (cep === "") {
      limparResultado();
      return;
    }
    consultarCep(cep);
  }
});

inputCep.addEventListener("input", function () {
  if (inputCep.value === "") {
    limparResultado();
  }
});

function mostrarSucesso(dados) {
  resultado.className = "resultado sucesso";
  resultado.innerHTML = `
    <p><strong>CEP:</strong> ${dados.cep}</p>
    <p><strong>Logradouro:</strong> ${dados.logradouro || "—"}</p>
    <p><strong>Complemento:</strong> ${dados.complemento || "—"}</p>
    <p><strong>Bairro:</strong> ${dados.bairro || "—"}</p>
    <p><strong>Cidade:</strong> ${dados.localidade}</p>
    <p><strong>UF:</strong> ${dados.uf}</p>
    <p><strong>Estado:</strong> ${dados.estado}</p>
    <p><strong>Região:</strong> ${dados.regiao}</p>
    <p><strong>DDD:</strong> ${dados.ddd}</p>
  `;
}