const empresas = [
    { id: 1, nome: "Senac", contato: "contatoA@email.com", servico: "Desenvolvimento" },
    { id: 2, nome: "Senai", contato: "contatoB@email.com", servico: "Consultoria" },
    { id: 3, nome: "IFB", contato: "contatoC@email.com", servico: "Faculdade" },
];

const adminTable = document.getElementById("admin-table");
const feedback = document.getElementById("feedback");

// Função para renderizar a tabela
function renderTabela() {
    adminTable.innerHTML = "";
    empresas.forEach(empresa => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${empresa.nome}</td>
            <td>${empresa.contato}</td>
            <td>${empresa.servico}</td>
            <td>
                <button class="edit" onclick="editarEmpresa(${empresa.id})">Editar</button>
                <button class="delete" onclick="deletarEmpresa(${empresa.id})">Excluir</button>
            </td>
        `;
        adminTable.appendChild(row);
    });
}

// Função para exibir feedback
function exibirFeedback(mensagem, tipo) {
    feedback.textContent = mensagem;
    feedback.className = `feedback ${tipo}`;
    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 3000);
}

// Função para editar uma empresa
function editarEmpresa(id) {
    const empresa = empresas.find(e => e.id === id);
    const novoNome = prompt("Editar Nome da Empresa:", empresa.nome);
    if (novoNome) {
        empresa.nome = novoNome;
        exibirFeedback("Empresa editada com sucesso!", "success");
        renderTabela();
    }
}

// Função para deletar uma empresa
function deletarEmpresa(id) {
    const index = empresas.findIndex(e => e.id === id);
    if (index !== -1) {
        empresas.splice(index, 1);
        exibirFeedback("Empresa excluída com sucesso!", "success");
        renderTabela();
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = "/templates/login.html";
}

// Inicializando a tabela
renderTabela();
