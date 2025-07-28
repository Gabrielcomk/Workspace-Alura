function desafio(){
    let dia;
    let aux;
    do{
        aux = "Passe";
    dia = prompt("Digite o dia");
    switch(dia){
        case "Sábado":{
            alert("Bom fim de semana!");
        } break;
        case "Domingo":{
            alert("Bom fim de semana!");
        } break;
        case "Segunda-Feira":{
            alert("Boa Semana!");
        } break;
        case "Terça-Feira":{
            alert("Boa Semana!");
        } break;
        case "Quarta-Feira":{
            alert("Boa Semana!");
        } break;
        case "Quinta-Feira":{
            alert("Boa Semana!");
        } break;
        case "Sexta-Feira":{
            alert("Boa Semana!");
        } break;
        default:{
            alert("Digite um dia válido. \nEX: 'Segunda-Feira' ou 'Sábado'.");
            aux = "Default";
        }
    }
} while(aux === "Default");
}

function desafio2(){
    let n;
    do {
    n = prompt("Digite um número aí vai, bem bomitimh vai");
    if (isNaN(n)){
        alert("Erro. Digite um número válido!");
    }
    } while(isNaN(n));
    if (n == 0){
        alert("Você digitou 0, ou nulo.");
    } else if (n >= 0){
        alert("Positivo");
    } else if (n <= 0){
        alert("Negativo");
    }
}

function desafio3(){
    let n;
    do {
    n = prompt("Digite um número maior que 100 ai vai");
    if (isNaN(n)){
        alert("Erro. Digite um número válido!");
    }
    } while(isNaN(n));
    if (n == 100){
        alert("Você pontoou 100!");
    }
    else if (n > 100){
        alert("Você pontoou" + n + "! É maior que 100!!! para bennss!!");
    } else if (n < 100){
        alert("Você pontoou " + n + ", Mas é menor que 100, logo, você perdeu seu perdedor.");
    }
}

function desafio4(){
    let saldo;
    saldo = prompt("Digite seu saldo ai vai.");
    alert("Seu saldo é " + saldo + ", mermão.")
}

function desafio5(){
    let nome;
    nome = prompt("Digite o seu nome aiii");
    alert("Belezinha, " + nome + ", Boas vindawdas");
}



