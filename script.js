let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function decifrar() {
    let textoCifrado = document.getElementById('cifrado').value.trim();

    let textoDecifrado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        let caractereCifrado = textoCifrado[i].toLowerCase();
        let caractereDecifrado = realizarConversao(caractereCifrado);
        textoDecifrado += caractereDecifrado;
    }

    document.getElementById('resultado').innerText = textoDecifrado;
}

function realizarConversao(caractereCifrado) {
    if (caractereCifrado == ' ') {
        return ' ';
    }
    
    let posicaoCaractereCifrado = alfabeto.indexOf(caractereCifrado);
    let posicaoCaractereDecifrado = posicaoCaractereCifrado - 3;

    //se ficar negativo precisa ir para o final do array
    if (posicaoCaractereDecifrado < 0) {
        posicaoCaractereDecifrado = posicaoCaractereDecifrado * -1;
        posicaoCaractereDecifrado = 26 - posicaoCaractereDecifrado;
    }
    
    return alfabeto[posicaoCaractereDecifrado];
}
