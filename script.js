document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const genero = form.querySelector('input[name="genero"]:checked');
    const estado = document.getElementById("estado");
    const imagem = document.getElementById("imagem");

    // Elementos erro
    const erroImagem = document.getElementById("erro-imagem");

    // Limpa erros anteriores
    erroImagem.textContent = "";

    let mensagensErro = [];

    if (!email.value.includes("@")) {
      mensagensErro.push("Informe um email válido.");
    }

    if (senha.value.length < 6) {
      mensagensErro.push("A senha deve ter pelo menos 6 caracteres.");
    }

    if (!genero) {
      mensagensErro.push("Selecione o gênero.");
    }

    if (!estado.value) {
      mensagensErro.push("Selecione um estado.");
    }

    // Validação imagem (se enviada)
    if (imagem.files.length > 0) {
      const file = imagem.files[0];
      const tiposAceitos = ["image/jpeg", "image/png", "image/gif"];
      const tamanhoMaximo = 2 * 1024 * 1024; // 2MB

      if (!tiposAceitos.includes(file.type)) {
        mensagensErro.push("Formato da imagem inválido. Use jpg, png ou gif.");
      }

      if (file.size > tamanhoMaximo) {
        mensagensErro.push("Imagem muito grande. Máximo 2MB.");
      }
    }

    if (mensagensErro.length > 0) {
      // Mostra os erros gerais em alert
      alert("Corrija os seguintes erros:\n\n" + mensagensErro.join("\n"));
    } else {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });
});
