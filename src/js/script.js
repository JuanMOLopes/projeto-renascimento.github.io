let renascimento = document.getElementById("inovacoes-renascentistas");
let atualidade = document.getElementById("inovacoes-atuais");

function exibirRenascimento() {
  atualidade.style.display = "none";
  renascimento.style.display = "block";
}
function exibirAtualidade() {
  renascimento.style.display = "none";
  atualidade.style.display = "block";
}
