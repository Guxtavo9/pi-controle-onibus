$(document).ready(function () {
  // Máscara para o CPF
  $('#cpf').inputmask('999.999.999-99', { placeholder: ' ' });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      try {
        const formData = new FormData(form);

        const response = await axios.post('http://localhost:3000/admin/passageiro/cadastrar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const { passageiro } = response.data;

        alert("Passageiro cadastrado com sucesso.");

        window.location.href = `/passageiros/exibir/${passageiro.id}`;
      } catch (error) {
        console.log(error);
        alert(error.response.data.mensagem);
      }
    }

    form.classList.add('was-validated');
  }, false);
});
