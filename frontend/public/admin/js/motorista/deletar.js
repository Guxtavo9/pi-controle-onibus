async function carregarDetalhesMotorista() {
    try {
        const id = window.location.pathname.split('/').pop();
        const response = await axios.get(`http://localhost:3000/admin/motoristas/exibir/${id}`);
        const motorista = response.data;

        const detalhesMotorista = document.querySelector("#detalhes-motorista");

        const codigoElem = document.createElement('div');
        codigoElem.innerHTML = `<div><strong>Código:</strong> ${motorista.id}</div>`;
        detalhesMotorista.append(codigoElem);

        const nomeElem = document.createElement('div');
        nomeElem.innerHTML = `<div><strong>Nome:</strong> ${motorista.nome}</div>`;
        detalhesMotorista.append(nomeElem);

        const fotoElem = document.createElement('div');
        if (motorista.foto) {
            fotoElem.innerHTML = `
        <div>
          <strong>Foto:</strong> 
          <img src="http://localhost:3000/${motorista.foto}" alt="${motorista.nome}" width="50">
        </div>`;
        } else {
            fotoElem.innerHTML = `<div><strong>Foto:</strong> Não possui.</div>`;
        }
        detalhesMotorista.append(fotoElem);
    } catch (error) {
        console.log(error);

        if (error?.response?.status === 404) {
            alert("Motorista não encontrado.");
            window.location.href = "/motoristas/listar";
        } else {
            alert(error.response.data.mensagem);
        }
    }
}

async function deletar(event) {
    event.preventDefault();

    const confirmacao = confirm("Tem certeza que deseja deletar este motorista?");
    if (confirmacao) {
        try {
            const id = window.location.pathname.split('/').pop();
            await axios.delete(`http://localhost:3000/admin/motoristas/deletar/${id}`);
            alert("Motorista deletado com sucesso.");
            window.location.href = "/motoristas/listar";
        } catch (error) {
            console.log(error);
            alert("Erro ao deletar o motorista.");
        }
    }
}

carregarDetalhesMotorista();
document.querySelector("#deletar-motorista").addEventListener("submit", deletar);