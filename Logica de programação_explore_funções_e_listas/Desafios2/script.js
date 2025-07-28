import readlineSync from 'readline-sync';



let select;
let nome;
let numero;
let numero1;
let numero2;
let numero3;

do{
select = Number(readlineSync.question(
    'Digite qual desafio fazer: \n' +
    '0: Finalizar. \n' +
    '1: Criar uma função que exibe "Olá, mundo!" no console.\n' +
    '2: Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.\n' +
    '3: Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.\n' +
    '4: Criar uma função que recebe três números como parâmetros e retorna a média deles.\n' +
    '5: Criar uma função que recebe dois números como parâmetros e retorna o maior deles.\n' +
    '6: Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.\n'
));

switch(select){
    case 1:{
        olaMundo();
} break;
    case 2:{
        nome = readlineSync.question("\n Digite o nome: ");
        nomeParametro(nome);
    } break;
    case 3:{
        numero = readlineSync.question("\n Digite o número: ");
        dobrar(numero);
    } break;
    case 4:{
        console.log("\n Farei a média.");
        numero1 = Number(readlineSync.question("\n Digite o número 1: "));
        numero2 = Number(readlineSync.question("\n Digite o número 2: "));
        numero3 = Number(readlineSync.question("\n Digite o número 3: "));
        media(numero1, numero2, numero3);
    } break;
    case 5:{
        console.log("\n Direi o máximo.");
        numero1 = Number(readlineSync.question("\n Digite o número 1: "));
        numero2 = Number(readlineSync.question("\n Digite o número 2: "));
        numero3 = Number(readlineSync.question("\n Digite o número 3: "));
        maior(numero1, numero2, numero3);
    } break;
    case 6:{
        numero = readlineSync.question("\n Digite o número: ");
        multiPorSi(numero);
    } break;
    case 0:{
        console.log("\nFinalizando...\n");
    }break;
    default:{
        console.log("\nNúmero inválido.\n");
        }
    } 
} while (select != '0');



// FUNÇÕES //

function olaMundo(nome) {
    console.log("\n Olá, mundo! \n");
}


function nomeParametro(nome) {
    console.log("\n Você digitou: " + nome + "\n");
}

function dobrar(numero){
    numero = numero * 2;
console.log(numero);
}

function media(numero1, numero2, numero3){
    let somaNumeros = (numero1 + numero2 + numero3);
    let mediaNumeros = (somaNumeros / 3);
    console.log(mediaNumeros.toFixed(2));
}

function maior(numero1, numero2, numero3){
    let numeroMaior = numero1;
    numeroMaior = numeroMaior < numero2 ? numeroMaior = numero2 : numeroMaior;
    numeroMaior = numeroMaior < numero3 ? numeroMaior = numero3 : numeroMaior;
    console.log("\n O maior número digitado foi: " + numeroMaior + "\n");
}

function multiPorSi(numero){
    let numeroMulti = numero * numero;
    console.log("\n Resultado do número multiplicado por si: " + numeroMulti + "\n");
}




//Para rodar o código, siga a ordem: //
// cd "C:\XX\XX\XX\Workspace\Desafios6" (Adicione o caminho no XX)//
// chcp 65001 (Arrumar as letras quebradas) //
//crie um novo terminal e o faça ser o node do código //
// node script.js (faz o arquivo funcionar)//
