document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const cargo = document.getElementById('cargo').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const senha = document.getElementById('senha').value;
  
      const funcionario = {
        nome: nome,
        cargo: cargo,
        email: email,
        telefone: telefone,
        senha: senha
      };
  
      localStorage.setItem('funcionario', JSON.stringify(funcionario));
  
      alert('Cadastro realizado com sucesso!');
      form.reset();
    });
  });
  