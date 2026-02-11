function change() {
    const radio1 = document.getElementById("individualradio");
    const radio2 = document.getElementById("licensaradio");
    const field1 = document.getElementById("individualfield");
    const field2 = document.getElementById("licensafield"); 
    const campo1 = document.getElementById("campo1"); 
    const campo2 = document.getElementById("campo2"); 
    const campo3 = document.getElementById("campo3"); 


}

function change1() {
    const pix = document.getElementById("PIX");
    const boleto = document.getElementById("BOLETO");
    const cartao = document.getElementById("CARTAO");
    const campo1 = document.getElementById("campo1"); 
    const campo2 = document.getElementById("campo2"); 
    const campo3 = document.getElementById("campo3"); 


    pix.addEventListener("change", function() {
        if (pix.checked) {
            campo3.style.display = "block";
            campo2.style.display = "none";
            campo1.style.display = "none";

        }
    });

    boleto.addEventListener("change", function() {
        if (boleto.checked) {
            campo1.style.display = "none"; 
            campo2.style.display = "block";
            campo3.style.display = "none";
        }
    });

cartao.addEventListener("change", function() {
    if (cartao.checked) {
        campo2.style.display = "none"; 
        campo1.style.display = "block";
        campo3.style.display = "none";
    }
});
}

   function pix(){


    alert("como voce escolheu pix, sua compra terá 10% de desconto")
   }
 
   function juros(){
    var a = 0.02
    var b = 1
    const c = document.getElementById("numero").value;
    var d = -2
    var resultado = (b*a*(c-2)+b);

    if(c > 3) {alert("a % dos juros será: " + resultado + "%")}

   }

   function compra(){

    alert("PARABÉNS!!!! Sua compra foi realizada com sucesso!")
   }


   function change2() {
    const pix2 = document.getElementById("PIX2");
    const boleto2 = document.getElementById("BOLETO2");
    const cartao2 = document.getElementById("CARTAO2");
    const campo12 = document.getElementById("campo12"); 
    const campo22 = document.getElementById("campo22"); 
    const campo32 = document.getElementById("campo32"); 


    pix2.addEventListener("change", function() {
        if (pix2.checked) {
            campo32.style.display = "block";
            campo22.style.display = "none";
            campo12.style.display = "none";

        }
    });

    boleto2.addEventListener("change", function() {
        if (boleto2.checked) {
            campo12.style.display = "none"; 
            campo22.style.display = "block";
            campo32.style.display = "none";
        }
    }); cartao2.addEventListener("change", function() {
        if (cartao2.checked) {
            campo22.style.display = "none"; 
            campo12.style.display = "block";
            campo32.style.display = "none";
        }
    });
    }
       function pix2(){
        var a = 1
        var b = 0.10
        resultado = (a-b*a)
    
        alert("como voce escolheu pix, sua compra terá 10% de desconto")
       }
     
       function juros2(){
        var a = 0.05
        var b = 1
        const c = document.getElementById("numero2").value;
        var d = -2
        var resultado = (b*a*(c-2)+b);
    
        if(c > 3) {alert("o preço total é" + resultado)}
    
       }