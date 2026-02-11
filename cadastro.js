function gerarCodigoRegistro() {
    var marca = document.getElementById('Juao').value;
    var modelo = document.getElementById('Juao').value;
    var ano = document.getElementById('Juao').value;

    if (marca !== '' && modelo !== '' && ano !== '') {
      alert('Carro registrado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }