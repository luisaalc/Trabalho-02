const express = require("express");

const router = express.Router();

// ─── Tarefa A — Avisos ────────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const avisos = [];
let proximoId = 1;

// GET /avisos — lista todos os avisos.
router.get("/", (req, res) => {
  // TODO (Tarefa A): responda com status 200 e o array `avisos`.

  // Adicionado: responde com status 200 e o array de avisos.
  return res.status(200).json(avisos);

  res.status(501).json({ erro: "não implementado" });
});

// POST /avisos — cria um aviso { titulo, mensagem } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // TODO (Tarefa A):
  //  1. Leia titulo (texto) e mensagem (texto) de req.body.
  //  2. Se faltar titulo OU mensagem, responda 400.
  //  3. Crie { id: proximoId++, titulo, mensagem }, adicione em `avisos`
  //     e responda 201 com o aviso criado.

  // Adicionado: lê titulo e mensagem do corpo da requisição.
  const { titulo, mensagem } = req.body;

  // Adicionado: verifica se titulo ou mensagem estão faltando.
  if (!titulo || !mensagem) {
    return res.status(400).json({ erro: "titulo e mensagem são obrigatórios" });
  }

  // Adicionado: cria o aviso.
  const aviso = {
    id: proximoId++,
    titulo: titulo,
    mensagem: mensagem
  };

  // Adicionado: adiciona o aviso ao array em memória.
  avisos.push(aviso);

  // Adicionado: responde com status 201 e o aviso criado.
  return res.status(201).json(aviso);

  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
