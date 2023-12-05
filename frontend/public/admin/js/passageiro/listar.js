document.addEventListener("DOMContentLoaded", async (event) => {
  try {
    const tbody = document.querySelector("#passageiros tbody");

    const response = await axios.get(
      "http://localhost:3000/api/passageiro/listar"
    );
    response.data.forEach((passageiro) => {
      const tr = document.createElement("tr");

      const fotoTd = document.createElement("td");
      if (passageiro.foto) {
        fotoTd.innerHTML = `<img src="http://localhost:3001/${passageiro.foto}" alt="${passageiro.nome}" width="50">`;
      } else {
        fotoTd.innerHTML = "Não possui.";
      }
      tr.appendChild(fotoTd);

      const nomeTd = document.createElement("td");
      nomeTd.textContent = passageiro.nome;
      tr.appendChild(nomeTd);

      const saldoTd = document.createElement("td");
      saldoTd.textContent = passageiro.saldo;
      tr.appendChild(saldoTd);

      const cpfTd = document.createElement("td");
      cpfTd.textContent = passageiro.cpf;
      tr.appendChild(cpfTd);

      const carterinhaTd = document.createElement("td");
      carterinhaTd.textContent = passageiro.carterinha;
      tr.appendChild(carterinhaTd);

      const emailTd = document.createElement("td");
      emailTd.textContent = passageiro.email;
      tr.appendChild(emailTd);
      
      const telefoneTd = document.createElement("td");
      telefoneTd.textContent = passageiro.telefone;
      tr.appendChild(telefoneTd);

      const codigoTd = document.createElement("td");
      codigoTd.textContent = passageiro.id;
      tr.appendChild(codigoTd);

      const acoesTd = document.createElement("td");
      const exibirLink = `<a href="/passageiro/exibir/${passageiro.id}">Exibir</a>`;
      const editarLink = `<a href="/passageiro/editar/${passageiro.id}">Editar</a>`;
      const deletarLink = `<a href="/passageiro/deletar/${passageiro.id}">Deletar</a>`;
      acoesTd.innerHTML = `${exibirLink} | ${editarLink} | ${deletarLink}`;
      tr.appendChild(acoesTd);

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
    alert(error.response.data.mensagem);
  }
});
