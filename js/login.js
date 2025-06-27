const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", event => {
  event.preventDefault();

  const usuario = formLogin.usuario.value.trim();
  const senha = formLogin.senha.value.trim();

  if (!usuario || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    sessionStorage.setItem("usuarioLogado", JSON.stringify(user));
    alert("Login realizado com sucesso!");
    window.location.href = "denuncia.html";
  } else {
    alert("Usuário ou senha incorretos.");
    formLogin.senha.value = "";
    formLogin.senha.focus();
  }
});
