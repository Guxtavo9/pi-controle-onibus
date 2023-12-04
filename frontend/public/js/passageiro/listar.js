document.addEventListener("DOMContentLoaded", async (event) => {
  
    try {
      const tableBody = document.querySelector("tbody");
      const response = await axios.get("http://localhost:3000/passageiro/listar");
      response.data.forEach((passageiro) => {
        const row = tableBody.insertRow(-1);
        row.insertCell(0).innerHTML = passageiro.nome;
        row.insertCell(1).innerHTML = passageiro.saldo;
        row.insertCell(2).innerHTML = passageiro.cpf;
        row.insertCell(3).innerHTML = passageiro.carterinha;
        row.insertCell(4).innerHTML = passageiro.email;
        row.insertCell(5).innerHTML = passageiro.telefone;
        row.insertCell(6).innerHTML = passageiro.usuario;
 
  
        // Link para Exibir
        const showLink = document.createElement("a");
        showLink.innerHTML = "Exibir";
        showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
        showLink.href = `http://localhost:3001/passageiro/exibir/${passageiro.id}`;
        row.insertCell(7).appendChild(showLink);
  
        // Link para Editar
        const editLink = document.createElement("a");
        editLink.innerHTML = "Editar";
        editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
        editLink.href = `http://localhost:3001/passageiro/editar/${passageiro.id}`;
        row.insertCell(8).appendChild(editLink);
  
        // Link para Deletar
        const deleteLink = document.createElement("a");
        deleteLink.innerHTML = "Deletar";
        deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
        deleteLink.href = `http://localhost:3001/passageiro/excluir/${passageiro.id}`;
        row.insertCell(9).appendChild(deleteLink);
      });
    } catch (error) {
        console.error("Erro ao listar Passageiros", error);
        res.status(500).json({ error: "Erro interno do servidor" });
      }
  });
  