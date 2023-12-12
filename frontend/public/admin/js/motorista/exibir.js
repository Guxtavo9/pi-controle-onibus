document.addEventListener("DOMContentLoaded", async () => {
  try {
    const id = window.location.pathname.split("/").pop();

    const response = await axios.get(
      `http://localhost:3000/admin/motorista/exibir/${id}`
    );
    const motorista = response.data;

    // tentando exibir a foto
    const exibirImg = document.getElementById("exibirImg");

    exibirElemImg = document.createElement("div");
    if (motorista.foto) {
      exibirElemImg.innerHTML = `<div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

            <img src="http://localhost:3000/${motorista.foto}" alt="${motorista.nome}" class="rounded-circle">

            <h2 id="nomeMotorista">${motorista.nome}</h2>
            <h3>Motorista</h3>
          </div>`;
    } else {
        exibirElemImg.innerHTML = `<div class="row">
                                      <div class="col-lg-3 col-md-4 label"><strong>Foto:</strong></div>
                                      <div class="col-lg-9 col-md-8">Não possui.</div>
                                  </div>`;
      }

    exibirImg.append(exibirElemImg);
    // =============================

    // Atualiza o nome do motorista
    document.getElementById("nomeMotorista").innerText = motorista.nome;

    const detalhesMotorista = document.getElementById("detalhes-motorista");

    // Adiciona dinamicamente os detalhes do motorista
    const elementosDetalhes = [
      { chave: "ID do Motorista", valor: motorista.id },
      { chave: "Nome", valor: motorista.nome },
      { chave: "CPF", valor: motorista.cpf },
      { chave: "Função", valor: "Motorista" },
      // Adicione mais detalhes conforme necessário
    ];

    elementosDetalhes.forEach((det) => {
      const elemento = document.createElement("div");
      elemento.innerHTML = `<div class="row">
                                    <div class="col-lg-3 col-md-4 label">${det.chave}</div>
                                    <div class="col-lg-9 col-md-8">${det.valor}</div>
                                </div>`;
      detalhesMotorista.append(elemento);
    });

    // const fotoElem = document.createElement("div");
    // if (motorista.foto) {
    //   fotoElem.innerHTML = `
    //             <div class="row">
    //                 <div class="col-lg-3 col-md-4 label"><strong>Foto:</strong></div>
    //                 <div class="col-lg-9 col-md-8">
    //                     <img src="http://localhost:3000/${motorista.foto}" alt="${motorista.nome}" class="rounded-circle" width="100">
    //                 </div>
    //             </div>`;
    // } else {
    //   fotoElem.innerHTML = `<div class="row">
    //                                 <div class="col-lg-3 col-md-4 label"><strong>Foto:</strong></div>
    //                                 <div class="col-lg-9 col-md-8">Não possui.</div>
    //                             </div>`;
    // }
    // detalhesMotorista.append(fotoElem);
  } catch (error) {
    console.log(error);

    if (error?.response?.status === 404) {
      alert("Motorista não encontrado.");
      window.location.href = "/motorista/listar";
    } else {
      alert(error.response.data.mensagem);
    }
  }
});
