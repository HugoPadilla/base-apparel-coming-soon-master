document.getElementById('email').addEventListener('input', function(e) {
    campo = event.target;
    valido = document.getElementById('form');
    console.log(valido);
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se elimina el atributo data-error, y el css no aplica stylos a esta clase
    if (emailRegex.test(campo.value)) {
        valido.removeAttribute("data-error")
    } else {
        valido.setAttribute('data-error', "Please provide a valid email");
    }
});