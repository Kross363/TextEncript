

const textarea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function encriptar(stringEncriptado){
    let codigomatriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()
    for(let i=0;i<codigomatriz.length;i++){
        if(stringEncriptado.includes(codigomatriz[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(codigomatriz[i][0],codigomatriz[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let codigomatriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i=0;i<codigomatriz.length;i++){
        if(stringDesencriptado.includes(codigomatriz[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(codigomatriz[i][1],codigomatriz[i][0])
        }
    }
    return stringDesencriptado
}

function boton_encriptar(){
    const texto_encriptado=encriptar(textarea.value)
    mensaje.value=texto_encriptado
    textarea.value="";
    mensaje.style.background="none";
}

function boton_desencriptar(){
    const texto_desencriptado=desencriptar(textarea.value)
    mensaje.value=texto_desencriptado
    textarea.value=""
}

function boton_copiar(){
    const textoCopiar = document.getElementById ("mensaje")
    navigator.clipboard.writeText(mensaje.value)
    mensaje.textContent = "";
}



