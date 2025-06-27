function verificarAdmin() {
  if (!sessionStorage.getItem("adminLogado")) {
    window.location.href = "admin-login.html";
  } else {
    carregarKanban();
  }
}

function carregarKanban() {
  const denuncias = JSON.parse(localStorage.getItem("denuncias") || "[]");

  // Limpar todas as colunas
  ["Pendente", "Em Análise", "Resolvida"].forEach(status => {
    const coluna = document.getElementById(status);
    if (coluna) {
      coluna.innerHTML = `<h3>${status}</h3>`;
    }
  });

  // Adicionar cada denúncia na coluna correta
  denuncias.forEach((d, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.dataset.index = i;

    card.innerHTML = `
      <strong>${d.descricao}</strong><br>
      <em>${d.endereco}</em><br>
      ${d.imagem ? `<img src="${d.imagem}" style="max-width:100%;">` : ""}
      <p><small>Por: ${d.usuario}</small></p>
    `;

    card.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", i);
    });

    const coluna = document.getElementById(d.status);
    if (coluna) {
      coluna.appendChild(card);
    }
  });

  // Ativar arrastar e soltar entre colunas
  document.querySelectorAll(".coluna").forEach(col => {
    col.ondragover = e => e.preventDefault();

    col.ondrop = e => {
      e.preventDefault();
      const index = e.dataTransfer.getData("text");
      const denuncias = JSON.parse(localStorage.getItem("denuncias") || "[]");

      if (denuncias[index]) {
        denuncias[index].status = col.id;
        localStorage.setItem("denuncias", JSON.stringify(denuncias));
        carregarKanban(); // Atualiza a interface
      }
    };
  });
}
