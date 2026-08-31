const express = require("express");

const router = express.Router();

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [];
let proximoId = 1;

// GET /links — lista todos os links.
router.get("/", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `links`.
  res.status(501).json({ erro: "não implementado" });
});

// POST /links — cria um link { titulo, url } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // TODO (Tarefa B):
  //  1. Leia titulo (texto) e url (texto) de req.body.
  //  2. Se faltar titulo OU url, responda 400.
  //  3. Crie { id: proximoId++, titulo, url }, adicione em `links`
  //     e responda 201 com o link criado.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
