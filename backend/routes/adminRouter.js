var express = require("express");
var router = express.Router();
const upload = require("../middlewares/fileUpload");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Passageiro

router.get("passageiro/listar", async function (req, res, next) {
  const passageiro = await prisma.passageiro.findMany();
  res.status(200).json(passageiro);
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
  const passageiroNome = req.params.nome;

  try {
    const passageiros = await prisma.passageiro.findUnique({
      where: {
        nome: {
          contains: passageiroNome,
        },
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
    const { nome, cpf, email, carterinha, saldo, usuario_id } = req.body;
    const foto = req.file?.path;

    const passageiro = await prisma.passageiro.create({
      data: {
        nome,
        cpf,
        email,
        carterinha,
        saldo,
        foto,
        usuario_id,
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
    const { nome, cpf, email, carterinha, saldo, usuario_id } = req.body;
    const foto = req.file?.path;

    const passageiro = await prisma.passageiro.update({
      data: {
        nome,
        cpf,
        email,
        carterinha,
        saldo,
        foto,
        usuario_id,
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

    res.status(200).json({ msg: "cpf cancelado!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir o Passageiro." });
  }
});

// Motorista

router.get("/motorista", async (req, res) => {
  try {
    const motorista = await prisma.motorista.findMany();
    res.json(motorista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Não foi possível obter a lista de motoristas." });
  }
});


router.get("/motorista/exibir/:id", async function (req, res, next) {
  const motoristaId = parseInt(req.params.id);

  try {
    const motorista = await prisma.motorista.findUnique({
      where: {
        id: parseInt(motoristaId),
      },
    });

    if (!motorista) {
      res.status(404).json({ error: "motorista não encontrada" });
    }

    res.status(200).json(motorista);
  } catch (error) {
    console.error("Erro ao buscar motorista por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// router.put("/motorista/exibir/:id", async function (req, res, next) {
//   try {
//     const { nome, cpf, nascimento, usuario } = req.body;
//     const foto = req.file?.path;
//     const motoristaId = parseInt(req.params.id);

//     const motorista = await prisma.motorista.update({
//       where: {
//         id: motoristaId,
//       },
//       data: {
//         nome,
//         cpf,
//         nascimento,
//         foto,
//         usuario,
//       },
//     });

//     res.status(200).json(motorista);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Erro ao atualizar o motorista." });
//   }
// });

router.get("/motorista/buscar/:nome", async function (req, res, next) {
  const motoristaNome = req.params.nome;

  try {
    const motoristas = await prisma.motorista.findUnique({
      where: {
        nome: {
          contains: motoristaNome,
        },
      },
    });
    res.status(200).json(motoristas);
  } catch (error) {
    console.error("Erro ao buscar motorista por nome:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/motorista/cadastrar", upload.single("foto"),
  async (req, res, next) => {
    try {
      const { nome, cpf, nascimento, usuario } = req.body;
      const foto = req.file?.path;
      const motorista = await prisma.motorista.create({
        data: {
          nome,
          cpf,
          nascimento, // Correção aqui
          foto,
          usuario,
        },
      });

      res.status(200).json(motorista);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar o motorista." });
    }
  }
);

router.put("/motorista/editar/:id", upload.single("foto"), async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, cpf, nascimento, usuario } = req.body || null;
    const foto = req.file?.path;
    const data = { nome, cpf, nascimento, usuario, foto }

    const motorista = await prisma.motorista.update({
      where: { id: parseInt(id) },
      data
    });

    res.json({ motorista });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao editar o motorista." });
  }
});

router.delete("/motorista/excluir/:id", async function (req, res, next) {
  try {
    const motoristaId = parseInt(req.params.id);
    const motorista = await prisma.motorista.delete({
      where: {
        id: parseInt(motoristaId),
      },
    });

    if (motorista) {
      res.json({ message: "motorista excluído com sucesso." });
    } else {
      res.status(404).json({ error: "motorista não encontrada." });
    }

    res.status(200).json({ msg: "motorista deletado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir o motorista." });
  }
});

// Linha

router.get("/linha/listar", async function (req, res, next) {
  const linhas = await prisma.linha.findMany();
  res.json(linhas);
});

router.get("/linha/buscar/:id", async function (req, res, next) {
  const linhaId = parseInt(req.params.id); 

  try {
    const linha = await prisma.linha.findUnique({
      where: {
        id: linhaId,
      },
    });

    if (linha) {
      res.json(linha);
    } else {
      res.status(404).json({ error: 'Linha não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar linha por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post("/linha/cadastrar", async (req, res, next) => {
  try {
    const { nome, origem, destino, horarioPartida, duracao } = req.body;

    const novaLinha = await prisma.linha.create({
      data: {
        nome,
        origem,
        destino,
        horarioPartida: `1970-01-01T${horarioPartida}:00Z`,
        duracao: parseInt(duracao)
      },
    });

    res.json(novaLinha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a linha." });
  }
});

router.put('/linha/editar/:id', async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const { nome, origem, destino, horarioPartida, duracao } = req.body;
    
    const linhaAtualizada = await prisma.linha.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        origem: origem,
        destino: destino,
        horarioPartida: `1970-01-01T${horarioPartida}:00Z`,
        duracao: parseInt(duracao),
      },
    });

    res.json(linhaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a linha.' });
  }
});

router.delete("/linha/excluir/:id", async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const linhaExcluida = await prisma.linha.delete({
      where: {
        id: id,
      },
    });

    if (linhaExcluida) {
      res.json({ message: "Linha excluída com sucesso." });
    } else {
      res.status(404).json({ error: "Linha não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir a linha." });
  }
});

router.get("/linha/qtd-horarios-por-linha", async function (req, res, next) {
  try {
    const linhas = await prisma.linha.groupBy({
      by: ["nome"],
      _count: true,
      orderBy: {
        _count: {
          nome: "desc",
        },
      },
    });

    res.json(linhas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar consulta." });
  }
});

// Onibus

module.exports = router;
