function desafio(){
    let i = 1;
    let textElement = document.getElementById("text");
    textElement.innerHTML = "";
    do{
        textElement.innerHTML += i + " ";
        i++
    } while (i <= 10);
}

function desafio2(){
     let i = 10;
    let textElement = document.getElementById("text2");
    textElement.innerHTML = "";
    do{
        textElement.innerHTML += i + " ";
        i--
    } while (i >= 0);
}

 

