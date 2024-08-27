//VARAIBLES//

const textArea = document.querySelector(".contenidoizq__textarea");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.getElementById("copiar")|| document.querySelector(".contenido__tarjeta__copiar");
const mensajeTextarea=document.getElementById("mensaje textarea")

//llaves//
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value); //actualiza el contenido del textArera con el texto encriptado

    if (textArea.value !== "") {   // condicion que valida si el textArea tiene contenido, si no tiene no se borrar el contenido de la tarjeta
        mensaje.value = textoEncriptado;
        textArea.value = "";
        const tarjeta = document.getElementById("tarjeta");
        tarjeta.innerHTML="";
        btnCopiar.style.visibility = "visible";
        btnCopiar.textContent="copiar"
        btnCopiar.classList.remove("copiado")
    } 
}

function encriptar(stringEncriptado) {
    let codigoLlaves = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase() //tolowercase=texto y letras covertidas en minusculas

    for( let i=0; i<codigoLlaves.length;i++){
        if(stringEncriptado.includes(codigoLlaves[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigoLlaves[i][0],codigoLlaves[i][1])
        }
    }

    return stringEncriptado
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    if (textArea.value  !== ""){
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        const tarjeta = document.getElementById("tarjeta");
        tarjeta.innerHTML="";
        btnCopiar.style.visibility = "visible";
        btnCopiar.textContent="copiar"
        btnCopiar.classList.remove("copiado")
    }
}

function desencriptar(textoDesencriptado) {
    let codigoLlaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase()

    for( let i=0; i<codigoLlaves.length;i++){
        if(textoDesencriptado.includes(codigoLlaves[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(codigoLlaves[i][1],codigoLlaves[i][0])
        }

    }

    return textoDesencriptado
}

btnCopiar.addEventListener('click', e =>{
    mensajeTextarea.select();
    document.execCommand("copy");
    btnCopiar.textContent = "¡El texto a sido copiado!"; //cambia la frase del del boton
    btnCopiar.classList.add("copiado") // se crea una clase para el boton, se configura en el boton encriptar y desencriptar
});


