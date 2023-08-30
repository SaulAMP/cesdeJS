let contrasenia = document.querySelector('#psw');
let mensaje = document.querySelector('#message');
let letras = document.querySelector('#letter');
let capital = document.querySelector('#capital');
let numero = document.querySelector('#number');
let longitud = document.querySelector('#length');

function actualizarMensaje(validar, element){
    if(validar){
        element.classList.remove('invalid');
        element.classList.add('validar');
    }
    else{
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function validarClave(){
    let valor = contrasenia.value;
    actualizarMensaje(/[a-z]/.test(valor), letras);
    actualizarMensaje(/[A-Z]/.test(valor), capital);
    actualizarMensaje(/\d/.test(valor), numero);
    actualizarMensaje(valor.length >= 8, longitud);
}
//eventos
contrasenia.addEventListener('focus', () => {
    mensaje.style.display = 'block';
});

contrasenia.addEventListener('blur', () => {
    mensaje.style.display = 'none';
});

contrasenia.addEventListener('keyup', () => {
    validarClave();
});