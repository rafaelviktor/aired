function nomeRequerido() {
    document.getElementById("nome").setAttribute("required","");
}
function emailRequerido() {
    document.getElementById("email").setAttribute("required","");
}
function senhaRequerida() {
    document.getElementById("senha").setAttribute("required","");
}
function checkform() {
    var f = document.forms["autenticacao"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0)
            cansubmit = false;
    }

    document.getElementById('submit').disabled = !cansubmit;
}
document.addEventListener('contextmenu', event => event.preventDefault());
window.onload = checkform;
setInterval(checkform, 100);