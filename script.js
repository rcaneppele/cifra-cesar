let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
let numeros = '0123456789';

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
        return caractereCifrado;
    }

    if (numeros.indexOf(caractereCifrado) != -1) {
        let posicaoCaractereCifrado = numeros.indexOf(caractereCifrado);
        let posicaoCaractereDecifrado = posicaoCaractereCifrado - 3;
    
        //se ficar negativo precisa ir para o final do array
        if (posicaoCaractereDecifrado < 0) {
            posicaoCaractereDecifrado = posicaoCaractereDecifrado * -1;
            posicaoCaractereDecifrado = 10 - posicaoCaractereDecifrado;
        }
        
        return numeros[posicaoCaractereDecifrado];
    }

    //remove acentos do caractere
    if ("áàãâ".indexOf(caractereCifrado) != -1) {
        caractereCifrado = 'a';
    } else if ("éê".indexOf(caractereCifrado) != -1) {
        caractereCifrado = 'e';
    } else if (caractereCifrado == 'í') {
        caractereCifrado = 'i';
    } else if ("óôõ".indexOf(caractereCifrado) != -1) {
        caractereCifrado = 'o';
    } else if (caractereCifrado == 'ú') {
        caractereCifrado = 'u';
    } else if (caractereCifrado == 'ç') {
        caractereCifrado = 'c';
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
