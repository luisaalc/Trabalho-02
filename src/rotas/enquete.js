const express = require("express");

const router = express.Router();

// ─── Tarefa C — Enquete rápida ────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
// As opções já vêm cadastradas; vocês podem trocar os nomes se quiserem.
const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];

// GET /enquete — retorna as opções com a contagem de votos.
router.get("/", (req, res) => {
  res.status(200).json({ opcoes });
});

// POST /enquete/voto — corpo { opcao }: incrementa o voto daquela opção.
//   `opcao` é um TEXTO (string): o NOME de uma opção existente (ex.: "Presencial").
router.post("/voto", (req, res) => {
  const { opcao } = req.body;
  const opcaoEscolhida = opcoes.find((item) => item.nome === opcao);

  if (!opcaoEscolhida) {
    return res.status(400).json({ erro: "Opção não encontrada" });
  }

  opcaoEscolhida.votos += 1;
  return res.status(200).json(opcaoEscolhida);
});

module.exports = router;
