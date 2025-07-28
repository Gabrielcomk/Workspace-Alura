function desafios() {
    alert("Boas vindas ao nosso site!");
    let nome;
    let idade;
    let numeroDeVendas;
    let saldoDisponivel;
    let mensagemDeErro = "Erro! Preencha todos os campos."
    let nome2;
    let idade2;
    do {
        nome = prompt("Digite o nome 'Lua'");
        if (nome != "Lua") {
            alert("Errado, o nome correto é 'Lua'");
        }
    } while (nome != "Lua");

    do {
        idade = prompt("Digite a idade '25'");
        if (isNaN(idade)){
            alert("Errado. Digite um número válido.")
        } else if (idade != 25) {
            alert("Errado, a idade correta é '25'");
        }
    } while (idade != 25);

    do {
        numeroDeVendas = prompt("Digite o número de venda '50'");
        if (isNaN(numeroDeVendas)){
            alert("Errado. Digite um número válido.")
        } else if (numeroDeVendas != 50) {
            alert("Errado, o número de venda correto é '50'");
        }
    } while (numeroDeVendas != 50);

    do {
        saldoDisponivel = prompt("Digite o saldo disponível '1000'");
        if (isNaN(saldoDisponivel)) {
            alert("Errado. Digite um número válido.");
            } else if (saldoDisponivel != 1000) {
                alert("Errado, o saldo disponível correto é '1000'");
            }
     } while (saldoDisponivel != 1000);

        do{
        nome2 = prompt("Digite seu nome");
        if (nome2 === ""){
            alert(mensagemDeErro);
        }
        } while (nome2 === "");

        do {
            do {
        idade2 = prompt("Digite sua idade");
        if (isNaN(idade2)){
            alert("Errado. Digite um número válido.");
           } 
        } while (isNaN(idade2));
        
          if (idade2 == ""){
            alert(mensagemDeErro);
        }
     } while (idade2 == "");
         
    if (idade2 >= 18) {
            alert("Idade maior ou igual a 18.");
                } else {
                    alert("Idade menor que 18.");
                }
            
        };
