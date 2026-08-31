const express = require("express");

const router = express.Router();

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [];
let proximoId = 1;

// GET /links — lista todos os links.
router.get("/", (req, res) => {
  // Responde com status 200 e o array de links
  res.status(200).json(links);
});

// POST /links — cria um link { titulo, url } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // Lê titulo e url do corpo da requisição
  const { titulo, url } = req.body;

  // Verifica se titulo ou url estão faltando
  if (!titulo || !url) {
    return res.status(400).json({
      erro: "titulo e url são obrigatórios"
    });
  }

  // Cria o novo link
  const novoLink = {
    id: proximoId++,
    titulo,
    url
  };

  // Adiciona o link ao array
  links.push(novoLink);

  // Responde com status 201 e o link criado
  res.status(201).json(novoLink);
});

module.exports = router;