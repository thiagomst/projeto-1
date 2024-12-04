document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Enviar os dados para o servidor
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.success) {
        // Redirecionar para a página de administração
        window.location.href = "/templates/admin.html";
    } else {
        alert(result.message || "Credenciais inválidas!");
    }
});
