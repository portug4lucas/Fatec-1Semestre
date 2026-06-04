const fs = require("fs/promises");
const path = require("path");
const pool = require("../database/db");

const projectRoot = path.resolve(__dirname, "..", "..");
const sqlDir = path.resolve(__dirname, "init");
const seedDataDir = path.resolve(sqlDir, "seed-data");

const sqlFiles = [
  "schema-sql.sql",
  "seed-sql.sql"
];

async function runSqlFiles() {
  const files = sqlFiles.map((fileName) => path.join(sqlDir, fileName));

  if (files.length === 0) {
    throw new Error(`Nenhum arquivo .sql encontrado em ${sqlDir}`);
  }

  try {
    for (const file of files) {
      let sql = await fs.readFile(file, "utf8");
      const relativeFile = path.relative(projectRoot, file).replaceAll(path.sep, "/");

      sql = prepareSql(sql);

      process.stdout.write(`Executando ${relativeFile}... `);
      await pool.query(sql);
      console.log("ok");
    }
  } finally {
    await pool.end();
  }

  console.log(`${files.length} arquivo(s) SQL executado(s).`);
}

function prepareSql(sql) {
  const postgresPath = seedDataDir.replaceAll("\\", "/");
  return sql.replace(/__SEED_DATA_DIR__/g, postgresPath);
}

runSqlFiles().catch((error) => {
  console.error("Erro ao executar arquivos SQL:");
  console.error(error.message);
  process.exitCode = 1;
});