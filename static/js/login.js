const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Enviar dados de login para o Flask
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`
    });

    // Verifica se a resposta foi bem-sucedida
    if (response.ok) {
        // Salvar estado de login no cliente, caso seja necessário
        localStorage.setItem('loggedIn', true);
        
        // Redirecionar para a página de administração
        window.location.href = '/admin';  // Redireciona para a rota '/admin' no Flask
    } else {
        alert('Credenciais inválidas!');
    }
});
