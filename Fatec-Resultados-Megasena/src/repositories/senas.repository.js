const pool = require("../database/db");

async function last(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1"
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Nenhum concurso cadastrado." });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getConcurso(req, res) {
  const concurso = Number(req.params.concurso);

  if (isNaN(concurso)) {
    return res.status(400).json({ message: "Parâmetro inválido." });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM megasena WHERE concurso = $1",
      [concurso]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Concurso não encontrado." });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getPalpite(req, res) {
  const { dezenas } = req.body;

  if (!dezenas || !Array.isArray(dezenas) || dezenas.length < 6) {
    return res.status(400).json({ message: "Informe pelo menos 6 dezenas." });
  }

  try {
    const result = await pool.query("SELECT * FROM megasena");
    const concursos = result.rows;

    let acertos6 = 0;
    let acertos5 = 0;
    let acertos4 = 0;

    concursos.forEach((c) => {
      const sorteadas = [c.bola1, c.bola2, c.bola3, c.bola4, c.bola5, c.bola6];
      const acertos = sorteadas.filter((b) => dezenas.includes(b)).length;

      if (acertos === 6) acertos6++;
      else if (acertos === 5) acertos5++;
      else if (acertos === 4) acertos4++;
    });

    res.status(200).json({
      total: concursos.length,
      acertos6,
      acertos5,
      acertos4,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { last, getConcurso, getPalpite };