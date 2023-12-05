document.addEventListener("DOMContentLoaded", async (event) => {
    try {
      const tbody = document.querySelector("#motoristas tbody");
  
      const response = await axios.get(
        "http://localhost:3000/api/motorista/listar"
      );
      response.data.forEach((motorista) => {
        const tr = document.createElement("tr");
  
        const fotoTd = document.createElement("td");
        if (motorista.foto) {
          fotoTd.innerHTML = `<img src="http://localhost:3001/${motorista.foto}" alt="${motorista.nome}" width="50">`;
        } else {
          fotoTd.innerHTML = "Não possui.";
        }
        tr.appendChild(fotoTd);
  
        const nomeTd = document.createElement("td");
        nomeTd.textContent = motorista.nome;
        tr.appendChild(nomeTd);
  
        const cnhTd = document.createElement("td");
        cnhTd.textContent = motorista.cnh;
        tr.appendChild(cnhTd);
  
        const NascimentoTd = document.createElement("td");
        NascimentoTd.textContent = motorista.nascimento;
        tr.appendChild(NascimentoTd);
  
        const acoesTd = document.createElement("td");
        const exibirLink = `<a href="/motorista/exibir/${motorista.id}">Exibir</a>`;
        const editarLink = `<a href="/motorista/editar/${motorista.id}">Editar</a>`;
        const deletarLink = `<a href="/motorista/deletar/${motorista.id}">Deletar</a>`;
        acoesTd.innerHTML = `${exibirLink} | ${editarLink} | ${deletarLink}`;
        tr.appendChild(acoesTd);
  
        tbody.appendChild(tr);
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.mensagem);
    }
  });
  