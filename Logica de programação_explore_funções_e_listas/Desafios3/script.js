function Desafio1(altura, peso){
  if(peso.value == "" || altura.value == ""){
    alert("Preencha os campos corretamente.");
  }
  else if(peso.value < 0 || altura.value < 0){
    alert("Preencha os campos corretamente.");
  } 
  else{
    resultado = (peso.value / (altura.value * altura.value));
    alert("Seu IMC é: " + resultado.toFixed(2));
  }
}


function Desafio2(numero){
    if(numero.value <= 10){
    let resultado = 1;
  for(let i=2; i <= numero.value; i++){
    resultado = resultado * i;
    console.log(numero.value + " x " + i + " = " + resultado);
    alert(numero.value + " x " + i + " = " + resultado);
  }
} else{
    alert("Número muito alto. Digite um número menor ou igual a 10.");
}
}

function Desafio3(dolar){
    let reais = dolar.value * 4.80;
    alert("O valor em reais é: R$ " + reais.toFixed(2));
}

function Desafio4(altura, largura){
    let alt = Number(altura.value);
    let larg = Number(largura.value);
    let area = (alt * larg);
    let perimetro = (2 * (alt + larg));
    alert("A área do retângulo é: " + area + " e o perímetro é: " + perimetro + ".\n")
}

function Desafio5(raio){
    let pi = 3.14;
    let raioCirculo = Number(raio.value);

    let areaCirculo = (pi * raioCirculo * raioCirculo);
    let perimetrocCirculo = (2 * pi * raioCirculo);
    alert("A área do círculo é: " + areaCirculo.toFixed(2) + " e o perímetro é: " + perimetrocCirculo.toFixed(2) + ".\n");
}

function Desafio6(numero){
   for(let i = 1; i <= 10; i++){
       let resultado = numero.value * i;
       console.log(numero.value + " x " + i + " = " + resultado);
       alert(numero.value + " x " + i + " = " + resultado);
   }
}