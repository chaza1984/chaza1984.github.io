
function registrarSW(){

}


function inicio(){

//1. Agregar los listeners a los botones "entrada producto" y "borrar producto"
agregarListeners();
//2. Actualizar/Dibujar la lista
actualizarLista();
//3. Registrar el serviceWorker
registrarSW()


}


document.addEventListener('DOMContentLoaded', inicio);