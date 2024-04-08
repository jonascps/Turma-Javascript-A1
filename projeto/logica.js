var contador = 0;
setInterval(function () { executarProjeto() }, 1000);

function executarProjeto() {
    if ($('#mosquito')) {
        $('#mosquito').remove(); // remove o elemento usando .remove // .add
    }
    let altura = window.innerHeight;
    let largura = window.innerWidth;

    let posicaoAltura = Math.abs(Math.random() * altura - 100);
    let posicaoLargura = Math.abs(Math.random() * largura - 100);
    //document.write(posicaoAltura + "  <br> " + posicaoLargura)
    // createElement criar qualquer tipo de tag
    let imagem = document.createElement('img');
    //.src é usada para adicionar caminho ao elemento
    imagem.src = 'mosquito.PNG';
    // .className é usada para adicionar classe
    imagem.id = 'mosquito';
    imagem.className = 'mosquito ' + mudarTamanho();
    imagem.style.top = posicaoAltura + 'px';
    imagem.style.left = posicaoLargura + 'px';
    document.body.appendChild(imagem);
    // Adionar algum elemento a Body usando .appendChrild
    $('.mosquito').click(function () {
        imagem.src = 'sangue.PNG';
        contador++;

    })
    //document.write(mudarTamanho());
    document.getElementById('contador').innerHTML = contador;


}


function mudarTamanho() {
    let classe = Math.floor(Math.random() * 3); /// 0 - 1 * 4

    if (classe == 0) {
        return "tamanho1";
    } else if (classe == 1) {
        return "tamanho2";
    } else {
        return "tamanho3";
    }
}
