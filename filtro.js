document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var ano = parseInt(document.getElementById('ano').value);
    var marca = document.getElementById('marca').value;
    var tipoCarro = document.getElementById('tipo_carro').value;

    if ([2016, 2018, 2023, 2024].includes(ano)) {
        var resultado = '';

        
        switch (tipoCarro) {
            case 'Híbrido':
                resultado = `Carros da ${marca} do ano ${ano}`;
                exibirImagens(marca, 'hibrido');
                break;
            case 'Esportivo':
                resultado = `Carros da ${marca} do ano ${ano}`;
                exibirImagens(marca, 'esportivo');
                break;
            case 'Pick-up':
                resultado = `Carros da ${marca} do ano ${ano}`;
                exibirImagens(marca, 'pickup');
                break;
            case 'Carro de Passeio':
                resultado = `Carros da ${marca} do ano ${ano}`;
                exibirImagens(marca, 'passeio');
                break;
            default:
                resultado = 'Desculpe, o ano desse carro não temos no estoque.';
        }


        document.getElementById('mensagem').innerText = resultado;
    } else {

        document.getElementById('mensagem').innerText = 'Desculpe, a marca desse ano não temos no estoque.';
        document.getElementById('imagensCarros').innerHTML = ''; 
    }
    
});

function exibirImagens(marca, tipoCarro) {
    var containerImagens = document.getElementById('imagensCarros');
    containerImagens.innerHTML = '';
    

    var caminhosImagens = [];

   
    switch (marca) {
        case 'Toyota':
            switch (tipoCarro) {
                case 'hibrido':
                    caminhosImagens = ['img/Toyota P.png', 'img/Toyota Camry Hybrid.png', 'img/RAV4 Hybrid.png'];
                    break;
                case 'esportivo':
                    caminhosImagens = ['img/Toyota Supra.png', 'img/Toyota 86.png', 'img/Toyota MR2.png'];
                    break;
                case 'pickup':
                    caminhosImagens = ['img/Toyota Tacoma.png', 'img/Toyota Tundra.png', 'img/Vazio.png'];
                    break;
                case 'passeio':
                    caminhosImagens = ['img/Toyota Camry.png', 'img/Toyota Corolla.png', 'img/Toyota Prius.png'];
                    break;
            }
            break;
        case 'Honda':
            switch (tipoCarro) {
                case 'hibrido':
                    caminhosImagens = ['img/Honda CR-V Hybrid.png', 'img/Honda Insight.png', 'img/Honda Accord Hybrid.png'];
                    break;
                case 'esportivo':
                    caminhosImagens = ['img/Honda Civic Type R.png', 'img/Honda S2000.png', 'img/Honda NSX.png'];
                    break;
                case 'pickup':
                    caminhosImagens = ['img/Vazio.png', 'img/Honda Ridgeline.png', 'img/Vazio.png'];
                    break;
                case 'passeio':
                    caminhosImagens = ['img/Honda Civic.png', 'img/Honda Accord.png', 'img/Honda Fit.png'];
                    break;
            }
            break;
        case 'Ford':
            switch (tipoCarro) {
                case 'hibrido':
                    caminhosImagens = ['img/Ford Fusion Hybrid.png', 'img/Ford Escape Hybrid.png', 'img/Ford Explorer Hybrid.png'];
                    break;
                case 'esportivo':
                    caminhosImagens = ['img/Ford Mustang.png', 'img/Ford Focus RS.png', 'img/Ford GT.png'];
                    break;
                case 'pickup':
                    caminhosImagens = ['img/Ford F-150.png', 'img/Ford Ranger.png', 'img/Ford Super Duty.png'];
                    break;
                case 'passeio':
                    caminhosImagens = ['img/Ford Focus.png', 'img/Ford Fusion.png', 'img/Ford Fiesta.png'];
                    break;
            }
            break;
        case 'Fiat':
            switch (tipoCarro) {
                case 'hibrido':
                    caminhosImagens = ['img/Vazio.png', 'img/Vazio.png', 'img/Vazio.png'];
                    break;
                case 'esportivo':
                    caminhosImagens = ['img/Fiat 124 Spider.png', 'img/Vazio.png', 'img/Vazio.png'];
                    break;
                case 'pickup':
                    caminhosImagens = ['img/Vazio.png', 'img/Toro.png', 'img/Vazio.png'];
                    break;
                case 'passeio':
                    caminhosImagens = ['img/Fiat 500.png', 'img/Fiat Tipo.png', 'img/Fiat Argo.png'];
                    break;
            }
            break;
        default:
            
            caminhosImagens = ['img/Sem.png']; 
            
    }


    caminhosImagens.forEach(function(caminhoImagem) {
        var img = document.createElement('img');
        img.src = caminhoImagem;
        img.alt = 'Carro';
        containerImagens.appendChild(img);
    });
}