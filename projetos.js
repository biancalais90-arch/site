function calcularDesconto() {
  let preco = Number(document.getElementById("preco").value);
  let desconto = Number(document.getElementById("desconto").value);

  console.log("Preço original:", preco);
  console.log("Porcentagem de desconto:", desconto);

  if (preco < 0 || desconto < 0) {
    alert("Valores negativos não são permitidos!");
    document.getElementById("resultadoCalculadora").innerHTML =
      "Valores inválidos.";
  } else {
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;

    console.log("Valor do desconto:", valorDesconto);
    console.log("Preço final:", precoFinal);

    document.getElementById("resultadoCalculadora").innerHTML =
      "Preço original: R$ " +
      preco +
      "<br>Desconto: R$ " +
      valorDesconto +
      "<br>Preço final: R$ " +
      precoFinal;

    alert(
      "Preço original: R$ " +
        preco +
        "\nValor do desconto: R$ " +
        valorDesconto +
        "\nPreço final: R$ " +
        precoFinal,
    );
  }
}
function validar() {
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let senha = document.getElementById("senha").value;

  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexTelefone = /^[0-9]{10,11}$/;
  let regexSenha = /^.{6,}$/;

  let mensagem = "";

  if (!regexEmail.test(email)) {
    mensagem += "Email inválido<br>";
  }

  if (!regexTelefone.test(telefone)) {
    mensagem += "Telefone inválido (somente números com 10 ou 11 dígitos)<br>";
  }

  if (!regexSenha.test(senha)) {
    mensagem += "Senha inválida (mínimo 6 caracteres)<br>";
  }

  if (mensagem == "") {
    mensagem = "Dados válidos!";
  }

  document.getElementById("resultadoCadastro").innerHTML = mensagem;
}


const celulas = document.querySelectorAll('.celula');

let vezDox = true;

document.getElementById("botaoReiniciar").addEventListener('click', iniciarJogo);

function iniciarJogo() {
    vezDox = true;

    celulas.forEach(celula => {
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, { once: true });
    });
}

function tratarClique(evento) {
    evento.target.textContent = vezDox ? "X" : "O";
    vezDox = !vezDox;
}

iniciarJogo();