router.get("motorista/listar", async function (req, res, next) {
    const motorista = await prisma.motorista.findMany();
    res.json(motorista);
  });
  
  router.get("/motorista/buscar/:id", async function (req, res, next) {
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
  
  
  router.get("/motorista/buscar/:nome", async function (req, res, next) {
    const motoristaNome = (req.params.nome);
  
    try {
      const motoristas = await prisma.motorista.findUnique({
        where: {
          nome: {
            contains: motoristaNome
          }
        },
      });
      res.status(200).json(motoristas);
    } catch (error) {
      console.error("Erro ao buscar motorista por nome:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });
  
  router.post("/motorista/cadastrar", async (req, res, next) => {
    try {
      const { nome, cnh, cpf, nascimento, usuario} = req.body;
      const motorista = await prisma.motorista.create({
        data: {
          nome,
          cnh,
          nascimento,
          foto,
          usuario
        },
      });
  
      res.status(200).json(motorista);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar o motorista." });
    }
  });
  
  router.put("/motorista/editar/:id", async function (req, res, next) {
    try {
      const motoristaId = parseInt(req.params.id);
      const { nome, origem, destino, horarioPartida, duracao } = req.body;
  
      const motorista = await prisma.motorista.update({
        where: {
          id: parseInt(motoristaId)
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
  
      res.status(200).json(motorista);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar o motorista." });
    }
  });
  
  router.delete("/excluir/:id", async function (req, res, next) {
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
  
      res.status(200).json( { msg: 'cpf cancelado!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir o motorista." });
    }
  });