let numeroInformado = document.querySelector('input#num');
let lista = document.querySelector('select#lista');
let resultado = document.querySelector('div#resultado')
let numerosAdicionados = [];

function adicionar() { 
    let numeroValidado = Number(numeroInformado.value);
    if (numeroValidado >= 1 && numeroValidado <= 100 && numerosAdicionados.indexOf(numeroValidado) === -1) {
        numerosAdicionados.push(numeroValidado);
        
        let item = document.createElement('option');
        item.text = `O número ${numeroValidado} foi adicionado.`;
        lista.appendChild(item);
    } else {
        window.alert('[ERRO] Número invalido ou já adicionado na lista. Tente Novamente!');
    } 
    num.value = ' ';
    num.focus();
}

function finalizar () {

    if(numerosAdicionados.length == 0) {
        window.alert('[ERRO] Adicione valores antes de continuar!');
    } else {
    //Conta quantos números possui no array
    let numerosTotais = numerosAdicionados.length;
    resultado.innerHTML = '';
    resultado.innerHTML += `<p>Ao todo, temos ${numerosTotais} números adicionados na lista.</p>`;

    //Identifica o maior valor
    let maiorValor = Math.max(...numerosAdicionados);
    resultado.innerHTML += `<p>O maior valor informado foi: ${maiorValor}</p>`;

    //Identifica o menor valor
    let menorValor = Math.min(...numerosAdicionados);
    resultado.innerHTML +=`<p> O menor valor informado foi: ${menorValor}</p>`

    //Soma todos os valores
    let soma = numerosAdicionados.reduce((total, num ) => total + num, 0);
    resultado.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`

    //Calcula média dos valores 
    let media = soma / numerosTotais;
    resultado.innerHTML += `<p>A media dos valores é: ${media}</p>`
    }
}