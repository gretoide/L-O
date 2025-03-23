var activo = true;
function cambiarWsp(ocultar = false) {
    activo = !activo;
    var element = document.getElementById("converse-chat-cont");
    if (activo) {
        element.classList.remove("ocultarWsp");
    } else {
        element.classList.add("ocultarWsp");
    }
    if (ocultar) { element.classList.add("ocultarWsp"); }

}