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

let sidebar = document.getElementById("sidebar");
let botao = document.getElementById("toggleButton");

function exibirSidebar() {
  if (sidebar.classList.contains("expanded")) {
    sidebar.classList.remove("expanded");
    sidebar.style.width = "0";
    botao.style.left = "0";
    botao.textContent = ">";
  } else {
    sidebar.classList.add("expanded");
    sidebar.style.width = "250px";
    botao.style.left = "250px";
    botao.textContent = "<";
  }
}

function exibirSidebarBarra() {
  sidebar.classList.add("expanded");
  sidebar.style.width = "250px";
  botao.style.left = "250px";
  botao.textContent = "<";
}

function removerSidebar() {
  sidebar.classList.remove("expanded");
  sidebar.style.width = "0";
  botao.style.left = "0";
  botao.textContent = ">";
}
