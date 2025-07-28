const funAle = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min;
}


alert("Jogo do número secreto.");
let n;
let s;

n = prompt("Digite o mínimo");
s = prompt("Digite o máximo");


let ns = funAle(n, s);
let chute;
console.log(ns);
    do{
    chute = prompt("Escolha um número dentre " + n + " até " + s);
    if (chute == ns) {
        alert("Acertou!");
         } else if(chute > ns){
            alert("Número maior que o secreto.");
        } else if(chute < ns){
            alert("Número menor que o secreto.");
        }
    } while(chute != ns);


