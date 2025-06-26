const userMenu = document.getElementById("userMenu");
const dropdownMenu = document.getElementById("dropdownMenu");
const btnSair = document.getElementById("btnSair");
const nomeUsuarioSpan = document.getElementById("nomeUsuario");

// Carrega o usuário logado da sessão
const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
if (!usuarioLogado) {
  alert("Você precisa estar logado para fazer denúncias.");
  window.location.href = "login.html";
} else {
  nomeUsuarioSpan.textContent = usuarioLogado.nome || usuarioLogado.usuario;
}

// Toggle do dropdown ao clicar no menu (menos no botão sair)
userMenu.addEventListener("click", (e) => {
  if (e.target === btnSair) return;  // Não toggle se clicou no botão sair
  dropdownMenu.classList.toggle("show");
});

// Botão sair — limpa sessão e volta pra index
btnSair.addEventListener("click", () => {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
});

// Fecha dropdown ao clicar fora do menu
document.addEventListener("click", (e) => {
  if (!userMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});
