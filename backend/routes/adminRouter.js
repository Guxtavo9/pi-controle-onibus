var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Passageiro

linha

router.get("passageiro/listar", async function (req, res, next) {
  const passageiro = await prisma.passageiro.findMany();
  res.json(passageiro);
});

router.get("/passageiro/buscar/:id", async function (req, res, next) {
  const passageiroId = parseInt(req.params.id);

  try {
    const passageiro = await prisma.passageiro.findUnique({
      where: {
        id: parseInt(passageiroId),
      },
    });

    if (!passageiro) {
      res.status(404).json({ error: "Passageiro não encontrada" });
    }

    res.status(200).json(passageiro);
    
  } catch (error) {
    console.error("Erro ao buscar Passageiro por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


router.get("/passageiro/buscar/:nome", async function (req, res, next) {
  const passageiroNome = (req.params.nome);

  try {
    const passageiros = await prisma.passageiro.findUnique({
      where: {
        nome: {
          contains: passageiroNome
        }
      },
    });
    res.status(200).json(passageiros);
  } catch (error) {
    console.error("Erro ao buscar Passageiro por nome:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/passageiro/cadastrar", async (req, res, next) => {
  try {
    const { nome, saldo, cpf, carterinha, email, telefone, usuario} = req.body;

    const passageiro = await prisma.passageiro.create({
      data: {
        nome,
        saldo,
        cpf,
        carterinha,
        email,
        telefone,
        usuario
      },
    });

    res.status(200).json(passageiro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar o Passageiro." });
  }
});

router.put("/passageiro/editar/:id", async function (req, res, next) {
  try {
    const passageiroId = parseInt(req.params.id);
    const { nome, origem, destino, horarioPartida, duracao } = req.body;

    const passageiro = await prisma.passageiro.update({
      where: {
        id: parseInt(passageiroId)
      },
      data: {
        nome,
        saldo,
        cpf,
        carterinha,
        email,
        telefone,
        usuario
      },
    });

    res.status(200).json(passageiro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar o passageiro." });
  }
});

router.delete("/excluir/:id", async function (req, res, next) {
  try {
    const passageiroId = parseInt(req.params.id);
    const passageiro = await prisma.passageiro.delete({
      where: {
        id: parseInt(passageiroId),
      },
    });

    if (passageiro) {
      res.json({ message: "Passageiro excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Passageiro não encontrada." });
    }

    res.status(200).json( { msg: 'cpf cancelado!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir o Passageiro." });
  }
});

// Motorista

// Linha

// Onibus

module.exports = router;
