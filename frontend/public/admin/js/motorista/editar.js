document.getElementById("cpf").addEventListener("input", function (event) {
  let inputValue = event.target.value;

  // Remove caracteres não numéricos
  inputValue = inputValue.replace(/\D/g, "");

  // Adiciona pontos e traço conforme o formato do CPF
  if (inputValue.length > 3) {
    inputValue = inputValue.substring(0, 3) + "." + inputValue.substring(3);
  }
  if (inputValue.length > 7) {
    inputValue = inputValue.substring(0, 7) + "." + inputValue.substring(7);
  }
  if (inputValue.length > 11) {
    inputValue = inputValue.substring(0, 11) + "-" + inputValue.substring(11);
  }

  // Atualiza o valor no campo de formulário
  event.target.value = inputValue;
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const id = window.location.pathname.split("/").pop();
    const response = await axios.get(`http://localhost:3000/admin/motorista/exibir/${id}`);
    const motorista = response.data;

    console.log(motorista);
    const form = document.querySelector("#form");
    const nomeInput = document.querySelector("#nome");
    const cpfInput = document.querySelector("#cpf");
    const nascimentoInput = document.querySelector("#nascimento");

    const fotoAtual = document.querySelector("#fotoAtual");
    fotoAtual.src = motorista.foto;

    nomeInput.value = motorista.nome;
    cpfInput.value = motorista.cpf;
    nascimentoInput.value = motorista.nascimento.split("T")[0];
    

    form.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
          try {
            const formData = new FormData(form);
            await axios.put(`http://localhost:3000/admin/motorista/editar/${id}`, formData,{
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            alert("Motorista editado com sucesso.");
            window.location.href = `/motorista/exibir/${id}`;
          } catch (error) {
            console.log(error);
            alert(error.response.data.mensagem);
          }
        }

        form.classList.add("was-validated");
      },
      false
    );
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
