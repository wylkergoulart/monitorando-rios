document.getElementById("formDenuncia").addEventListener("submit", function (e) {
  e.preventDefault();
  const descricao = document.getElementById("descricao").value;
  const endereco = document.getElementById("endereco").value;
  const imagemInput = document.getElementById("foto").files[0];
  const usuario = sessionStorage.getItem("usuarioLogado");

  const reader = new FileReader();
  reader.onloadend = function () {
    const imagem = imagemInput ? reader.result : "";
    const denuncia = { descricao, endereco, imagem, status: "Pendente", usuario };
    const denuncias = JSON.parse(localStorage.getItem("denuncias") || "[]");
    denuncias.push(denuncia);
    localStorage.setItem("denuncias", JSON.stringify(denuncias));
    alert("Denúncia registrada!");
    document.getElementById("formDenuncia").reset();
  };
  if (imagemInput) reader.readAsDataURL(imagemInput);
  else reader.onloadend();
});