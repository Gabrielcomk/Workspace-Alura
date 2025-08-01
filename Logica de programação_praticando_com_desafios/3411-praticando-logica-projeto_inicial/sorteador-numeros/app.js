function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Quantidade de números maior do que o intervalo disponível!');
        return;
    }

    let sorteados = [];

    while (sorteados.length < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);

        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    document.getElementById('resultado').innerHTML = 
        `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 
        '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.toggle('container__botao-desabilitado');
    botao.classList.toggle('container__botao');
}