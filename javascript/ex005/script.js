function carregar() {
    let msg = window.document.querySelector('div#msg');
    let img = window.document.querySelector('img#imagem-manha');
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12){
        img.src = 'imagens-redimensionadas/manha.png';
        document.body.style.background = '#c3ae8a';
    } 
    else if (hora >=12 && hora < 18) {
        img.src = 'imagens-redimensionadas/tarde.png';
        document.body.style.background = '#ffcc5a';
    } else {
        img.src = 'imagens-redimensionadas/noite.png';
        document.body.style.background = '#3e312b';
    }
}


