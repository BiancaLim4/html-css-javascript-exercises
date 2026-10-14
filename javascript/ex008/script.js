let numeroInformado = document.querySelector('input#num');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res')
let numerosAdicionados = [];

function adicionar() { 
    let numeroValidado = Number(numeroInformado.value);
    if (numeroValidado >= 1 && numeroValidado <= 100 && numerosAdicionados.indexOf(numeroValidado) === -1) {
        numerosAdicionados.push(numeroValidado);
    } else {
        window.alert('[ERRO] Número invalido ou já adicionado na lista. Tente Novamente!');
    } 
}

function finalizar () {
    //Conta quantos números possui no array
    let numerosTotais = numerosAdicionados.length;
    console.log(`Ao todo, temos ${numerosTotais} números adicionados.`);

    //Identifica o maior valor
    let maiorValor = Math.max(...numerosAdicionados);
    console.log(`<br>O maior valor informado foi ${maiorValor}.`);

    //Identifica o menor valor
    let menorValor = Math.min(...numerosAdicionados);
    console.log(`<br> O menor valor informado foi ${menorValor}.`)

    //Soma todos os valores
    let soma = numerosAdicionados.reduce((total, num ) => total + num, 0);
    console.log(`A soma de todos os valores é ${soma}.`)

    //Calcula média dos valores 
    let media = soma
}