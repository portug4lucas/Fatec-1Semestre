const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ quiet: true });

const PORT = process.env.PORT;
const app = express();

const publicPath = path.join(__dirname, "public");
const pagesPath = path.join(publicPath, "pages");

app.use("/assets", express.static(path.join(publicPath, "assets")));

app.get("/", function (_req, res) {
  res.sendFile(path.join(pagesPath, "index.html"));
});

app.listen(PORT, function () {
  console.log(`Rodando em http://localhost:${PORT}`);
});