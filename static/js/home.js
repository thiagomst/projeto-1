function checkLogin() {
    // Verifica se o usuário está autenticado
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        window.location.href = "/templates/admin.html";
    } else {
        window.location.href = "/templates/login.html";
    }
}
