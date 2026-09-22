function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#ano-nasc');
    let res = document.querySelector('#res');
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique o ano informado e tente novamente')
    } else {
        var sex = document.getElementsByName ('sex');
        var idade = ano - Number(fano.value);
        var genero = '';
    }

        if (sex[0].checked) {
            genero = 'um homem';
            if(idade >= 0 && idade <= 4){
                img.setAttribute('src', 'bebe-m.png');
            } else if (idade <= 18){
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-m.png');
            } else {
                img.setAttribute('src', 'idoso-m.png');
            }
        
        } else if (sex[1].checked) {
            genero = 'uma mulher';
            if(idade >= 0 && idade <= 4){
                img.setAttribute('src','bebe-f.png');
            } else if (idade <= 18){
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-f.png');
            } else {
                img.setAttribute('src', 'idoso-f.png');
            }
        }

        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos!`;
        res.appendChild(img);
}