function loginAdmin() {
  const senha = document.getElementById("senhaAdmin").value;
  const erro = document.getElementById("erroAdmin");

  if (senha === "admin123") {
    sessionStorage.setItem("adminLogado", true);
    window.location.href = "admin.html";
  } else {
    erro.textContent = "Senha incorreta!";
  }
}

function verificarAdmin() {
  if (!sessionStorage.getItem("adminLogado")) {
    window.location.href = "admin-login.html";
  }
}