//Haz tú validación en javascript acá
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");


function verificar() {
    console.log('nombre: ', nombre.value);
    console.log('email: ', email.value);
    console.log('asunto: ', asunto.value);
    if (nombre.value.length > 50) {
        alert('el máximo de caracteres para el nombre es 50');
        document.querySelector(".formcontacto__boton").disabled = true; 
    }
    else if (asunto.value.length > 50) {
        alert('el máximo de caracteres para el asunto es 50');
        document.querySelector(".formcontacto__boton").disabled = true; 
    }

    else if (mensaje.value.length > 300) {
        alert('el máximo de caracteres para el mensaje es 300');
        document.querySelector(".formcontacto__boton").disabled = true; 
    }

    else {
        document.querySelector(".formcontacto__boton").disabled = false;
    }
}

addEventListener('click', verHabilitar);

function verHabilitar() {
    if (nombre.value.length <= 50 && asunto.value.length <= 50 && mensaje.value.length <= 300) {
        document.querySelector(".formcontacto__boton").disabled = false; 
    }
}