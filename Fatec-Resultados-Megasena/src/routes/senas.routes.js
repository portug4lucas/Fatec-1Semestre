const { Router } = require("express");
const { getConcurso, last, getPalpite } = require("../repositories/senas.repository");

const routes = Router();

routes.get("/", last);
routes.post("/palpite", getPalpite);
routes.get("/:concurso", getConcurso);

module.exports = routes;