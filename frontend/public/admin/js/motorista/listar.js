document.addEventListener("DOMContentLoaded", async (event) => {
    try {
      const tbody = document.querySelector("#motoristas tbody");


      const response = await axios.get(
        `http://localhost:3000/admin/motorista/`
      );
      const motorista = response.data;
      console.log(motorista)
      response.data.forEach((motorista) => {
        const tr = document.createElement("tr");

        const fotoTd = document.createElement("td");
        if (motorista.foto) {
          fotoTd.innerHTML = `<img src="http://localhost:3000/${motorista.foto}" alt="${motorista.nome}" width="50">`;
        } else {
          fotoTd.innerHTML = "Não possui.";
        }
        tr.appendChild(fotoTd);

        const nomeTd = document.createElement("td");
        nomeTd.textContent = motorista.nome;
        tr.appendChild(nomeTd);

        const cpfTd = document.createElement("td");
        cpfTd.textContent = motorista.cpf;
        tr.appendChild(cpfTd);

        const NascimentoTd = document.createElement("td");
        NascimentoTd.textContent = motorista.nascimento;
        tr.appendChild(NascimentoTd);

        const acoesTd = document.createElement("td");
        const exibirLink = `<a href="/admin/motorista/exibir/${motorista.id}">Exibir</a>`;
        const editarLink = `<a href="/admin/motorista/editar/${motorista.id}">Editar</a>`;
        const excluirLink = `<a href="/admin/motorista/excluir/${motorista.id}">excluir</a>`;
        acoesTd.innerHTML = `${exibirLink} | ${editarLink} | ${excluirLink}`;
        tr.appendChild(acoesTd);

        tbody.appendChild(tr);
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.mensagem);
    }
  });

// $('#table').DataTable({
//   "language": {
//     url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json',
//   },
//   "ajax": {
//     "url": "http://localhost:3000/admin/motorista/listar",
//     "dataSrc": "" // O atributo que contém os dados no JSON retornado
//   },

//   // 
//   nome,
//   cpf,
//   nascimento,
//   foto,
//   usuario,
//   // 
//   "columns": [
//     { "data": "id" },
//     { "data": "foto" },
//     { "data": "nome" },
//     { "data": "cpf" },
//     { "data": "nascimento" },
//     // { "data": null, "defaultContent": "" },
//   ],

//   "columnDefs": [
//     {
//       "targets": 1, // Coluna que contém a URL da imagem
//       "render": function (data, type, row) {
//         return <img src="http://localhost:3000/${data}" class="foto-table" alt="Foto" width="50" height="50">;
//       }
//       }
//           ],

//           "createdRow": function (row, data, dataIndex) {
//     // Adiciona os botões à terceira coluna
//     const linkContainer = document.createElement("div");
//           linkContainer.classList.add("btn-group");
//           linkContainer.setAttribute("role", "group");

//           const showLink = document.createElement("a");
//           showLink.innerHTML = "Exibir";
//           showLink.classList.add("btn", "btn-inverse-info", "btn-sm");
//           showLink.href = http://localhost:3001/admin/motorista/exibir/${data.id};

//           const editLink = document.createElement("a");
//           editLink.innerHTML = "Editar";
//           editLink.classList.add("btn", "btn-inverse-success", "btn-sm");
//           editLink.href = http://localhost:3001/admin/motorista/editar/${data.id};

//           const deleteLink = document.createElement("a");
//           deleteLink.innerHTML = "Deletar";
//           deleteLink.classList.add("btn", "btn-inverse-danger", "btn-sm");
//           deleteLink.href = http://localhost:3001/admin/motorista/excluir/${data.id};

//           linkContainer.appendChild(showLink);
//           linkContainer.appendChild(editLink);
//           linkContainer.appendChild(deleteLink);

//           $(row).find("td:eq(6)").html(linkContainer);
//   }
// });