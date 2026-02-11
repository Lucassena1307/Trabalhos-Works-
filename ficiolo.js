document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const funcionario = JSON.parse(localStorage.getItem('funcionario'));
    if (funcionario && email === funcionario.email && senha === funcionario.senha) {
      window.location.href = '/joguinho/index.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  });
});