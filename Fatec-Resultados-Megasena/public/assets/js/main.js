const formatarMoeda = (valor) =>
  Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatarData = (data) => {
  const d = new Date(data);
  return d.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

function renderizarDezenas(containerId, dezenas) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  dezenas.forEach((d) => {
    const span = document.createElement("span");
    span.className = "dezena";
    span.textContent = String(d).padStart(2, "0");
    container.appendChild(span);
  });
}

async function buscarConcurso() {
  const input = document.getElementById("inputConcurso").value.trim();
  const url = input ? `/api/${input}` : "/api";

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Erro ao buscar concurso.");
      return;
    }

    document.getElementById("tituloConcurso").textContent = `Concurso ${data.concurso}`;
    document.getElementById("dataConcurso").textContent = formatarData(data.data_do_sorteio);

    const acumulou = document.getElementById("acumulou");
    if (data.ganhadores_6_acertos === 0) {
      acumulou.classList.remove("hidden");
    } else {
      acumulou.classList.add("hidden");
    }

    renderizarDezenas("dezenas", [
      data.bola1, data.bola2, data.bola3,
      data.bola4, data.bola5, data.bola6
    ]);

    document.getElementById("info6").textContent =
      `${data.ganhadores_6_acertos} ganhador(es), ${formatarMoeda(data.rateio_6_acertos)}`;
    document.getElementById("info5").textContent =
      `${data.ganhadores_5_acertos} ganhador(es), ${formatarMoeda(data.rateio_5_acertos)}`;
    document.getElementById("info4").textContent =
      `${data.ganhadores_4_acertos} ganhador(es), ${formatarMoeda(data.rateio_4_acertos)}`;
    document.getElementById("infoEstimativa").textContent =
      formatarMoeda(data.estimativa_premio);

    document.getElementById("resultado").classList.remove("hidden");
  } catch (error) {
    alert("Erro ao conectar com o servidor.");
  }
}

async function buscarPalpite() {
  const input = document.getElementById("inputPalpite").value.trim();

  if (!input) {
    alert("Digite as dezenas do palpite.");
    return;
  }

  const dezenas = input.split(",").map((d) => Number(d.trim()));

  if (dezenas.length < 6 || dezenas.some(isNaN)) {
    alert("Digite pelo menos 6 dezenas separadas por vírgula.");
    return;
  }

  try {
    const res = await fetch("/api/palpite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dezenas }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Erro ao buscar palpite.");
      return;
    }

    document.getElementById("totalConsultados").textContent =
      `${data.total} concurso(s) consultado(s)`;

    renderizarDezenas("dezenasPalpite", dezenas);

    document.getElementById("palpite6").textContent = `${data.acertos6} concurso(s)`;
    document.getElementById("palpite5").textContent = `${data.acertos5} concurso(s)`;
    document.getElementById("palpite4").textContent = `${data.acertos4} concurso(s)`;

    document.getElementById("resultadoPalpite").classList.remove("hidden");
  } catch (error) {
    alert("Erro ao conectar com o servidor.");
  }
}

buscarConcurso();