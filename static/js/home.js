function checkLogin() {
    // Verifica se o usuário está autenticado
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        // Redireciona para a página de administração
        window.location.href = "/templates/admin.html";
    } else {
        // Redireciona para a tela de login
        window.location.href = "/templates/login.html";
    }
}
