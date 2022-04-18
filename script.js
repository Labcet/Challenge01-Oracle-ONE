function encriptar(){

    var texto = document.getElementById("texto").value;
    var textoEncriptado = '';
    
    for(var i = 0; i < texto.length; i++){
        switch (texto[i]) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
        
            default:
                textoEncriptado += texto[i];
                break;
        }
    }

    if(textoEncriptado != ''){
        document.getElementById("right-box").style.display = "none";
        document.getElementById("right-box-hidden").style.display = "initial";
        document.getElementById("texto-respuesta").innerHTML = textoEncriptado;
    }
}

function desencriptar(){

    var texto = document.getElementById("texto").value;
    var textoDesencriptado = '';
    
    for(var i = 0; i < texto.length; i++){
        switch (texto[i]) {
            case 'a':
                textoDesencriptado += 'a';
                i+=1;
                break;
            case 'e':
                textoDesencriptado += 'e';
                i+=4;
                break;
            case 'i':
            case 'o':
            case 'u':
                textoDesencriptado += texto[i];
                i+=3;
                break;
        
            default:
                textoDesencriptado += texto[i];
                break;
        }
    }

    if(textoDesencriptado != ''){
        document.getElementById("right-box").style.display = "none";
        document.getElementById("right-box-hidden").style.display = "initial";
        document.getElementById("texto-respuesta").innerHTML = textoDesencriptado;
    }
    
}

function copiarClipboard(){

    var contenido = document.getElementById('texto-respuesta');
    
    contenido.select();
    document.execCommand('copy');
}