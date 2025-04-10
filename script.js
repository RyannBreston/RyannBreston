// Função para o formulário de login
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verificar se a senha é "supermoda"
    if (password === 'supermoda') {
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    } else {
        alert('Senha incorreta! A senha correta é "supermoda".');
    }
});

// Personalizar o nome de usuário na página principal
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username') || 'Visitante';
    const welcomeText = document.querySelector('.welcome-text');
    if (welcomeText) {
        welcomeText.textContent = `Bem-vindo, ${username}!`;
    }
});

// Função para o botão de sair
document.querySelector('.logout-btn')?.addEventListener('click', () => {
    localStorage.removeItem('username');
    alert('Você saiu do Super Moda!');
    window.location.href = 'login.html';
});

console.log("Super Moda carregado com sucesso!");
