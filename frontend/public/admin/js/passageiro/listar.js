document.addEventListener("DOMContentLoaded", async () => {

  const form = document.querySelector("#passaeiro");
  try {
    const tableBody = document.querySelector("#passageiro tbody");
    const response = await axios.get("http://localhost:3000/admin/passageiro/listar");

    response.data.forEach((passageiro) => {
      const row = tableBody.insertRow(-1);
      row.insertCell(0).innerHTML = passageiro.id;
      row.insertCell(1).innerHTML = passageiro.nome;
      row.insertCell(2).innerHTML = passageiro.saldo;
      row.insertCell(3).innerHTML = passageiro.cpf;
      row.insertCell(4).innerHTML = passageiro.carterinha;
      row.insertCell(5).innerHTML = passageiro.email;
      row.insertCell(6).innerHTML = passageiro.telefone;

      // Link para Exibir
      const showLink = document.createElement("a");
      showLink.innerHTML = "Exibir";
      showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
      showLink.href = `http://localhost:3001/passageiros/exibir/${passageiro.id}`;
      row.insertCell(6).appendChild(showLink);

      // Link para Editar
      const editLink = document.createElement("a");
      editLink.innerHTML = "Editar";
      editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
      editLink.href = `http://localhost:3001/passageiros/editar/${passageiro.id}`;
      row.insertCell(7).appendChild(editLink);

      // Link para Deletar
      const deleteLink = document.createElement("a");
      deleteLink.innerHTML = "Deletar";
      deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
      deleteLink.href = `http://localhost:3001/passageiros/excluir/${passageiro.id}`;
      row.insertCell(8).appendChild(deleteLink);
    });
  } catch {

  }
});