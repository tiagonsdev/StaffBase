
let funcionarios = [];

function mostrarPagina(pagina) {
  document.querySelectorAll('.pagina').forEach(el => el.style.display = 'none');
  document.getElementById(pagina).style.display = 'block';
  if (pagina === 'listagem') atualizarTabela();
}

function validarFormulario() {
  let valido = true;

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cargo = document.getElementById("cargo").value;

  const erroNome = document.getElementById("erroNome");
  const erroEmail = document.getElementById("erroEmail");

  erroNome.textContent = "";
  erroEmail.textContent = "";

  if (nome.trim() === "") {
    erroNome.textContent = "O nome é obrigatório.";
    valido = false;
  }

  if (!email.includes("@") || email.trim() === "") {
    erroEmail.textContent = "E-mail inválido.";
    valido = false;
  }

  if (valido) {
    funcionarios.push({ nome, email, cargo });
    document.getElementById("cadastroForm").reset();
    alert("Funcionário cadastrado com sucesso!");
  }

  return false;
}

function atualizarTabela() {
  const tbody = document.getElementById("tabelaFuncionarios");
  tbody.innerHTML = "";
  funcionarios.forEach((f, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.nome}</td>
      <td>${f.email}</td>
      <td>${f.cargo}</td>
      <td class="actions">
        <button onclick="editarFuncionario(${i})">Editar</button>
        <button onclick="excluirFuncionario(${i})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function excluirFuncionario(index) {
  if (confirm("Tem certeza que deseja excluir este funcionário?")) {
    funcionarios.splice(index, 1);
    atualizarTabela();
  }
}

function editarFuncionario(index) {
  const f = funcionarios[index];
  document.getElementById("nome").value = f.nome;
  document.getElementById("email").value = f.email;
  document.getElementById("cargo").value = f.cargo;
  mostrarPagina('cadastro');
  excluirFuncionario(index);
}
