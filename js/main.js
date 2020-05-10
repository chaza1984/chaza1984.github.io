let listaProductos = []; // 1) Definir los items de la lista; 2) Paso los items de la lista a la pagina

function agregarListeners() {

    /*
    Elemento: #btn-entrada-producto
    Funcionalidad: agregar un producto a #lista
    */
    document.querySelector('#btn-entrada-producto').addEventListener('click', () => {
        let input = document.querySelector('#ingreso-producto');
        let producto = input.value;

        if(producto != '') {
            listaProductos.push({
                nombre: producto,
                cantidad: 1,
                precio: 0
            });

            actualizarLista();
        }

        input.value = '';
    });

    /*
    Elemento: #btn-borrar-productos
    Funcionalidad: vaciar #lista    
    */
   document.querySelector('#btn-borrar-productos').addEventListener('click', () => {
        listaProductos = [];
        actualizarLista();
   });

   /*
   Elemento: #txt-busqueda
   Funcionalidad: al teclear, filtrar los items
   */
  document.querySelector('#txt-busqueda').addEventListener('input', e => {
        let nueva_lista = [];

        listaProductos.forEach(val =>  {
            if(val.nombre.includes(e.target.value))
                nueva_lista.push(val);
        })

        actualizarLista(nueva_lista);
  });

}

function borrarProd(indice) {
    listaProductos.splice(indice, 1);
    actualizarLista();
}

function cambiarCantidad(indice, input) {
    listaProductos[indice].cantidad = Number(input.value);
}

function cambiarPrecio(indice, input) {
    listaProductos[indice].precio = Number(input.value);
}

function actualizarLista(nueva_lista = false) {
    
    let ul = document.querySelector('#ul_lista');
    // Borrar los elementos actuales
    ul.innerHTML = '';
    
    lista = nueva_lista == false ? listaProductos : nueva_lista;

    // Cargar los elementos de la lista
    lista.forEach(function(producto, indice){
        ul.innerHTML += `<li class="mdl-list__item">
        <span class="mdl-list__item-primary-content w-10">
            <i class="material-icons">shopping_cart</i>
        </span>
        <span class="mdl-list__item-primary-content w-30">
            ${producto.nombre}
        </span>
        <span class="mdl-list__item-primary-content w-20">

            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="sample-cant-${indice}" onchange="cambiarCantidad(${indice}, this)">
                <label class="mdl-textfield__label" for="sample-cant-${indice}">${producto.cantidad}</label>
            </div>
            
        </span>
        <span class="mdl-list__item-primary-content w-20 ml-item">

            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="sample-precio-${indice}" onchange="cambiarPrecio(${indice}, this)">
                <label class="mdl-textfield__label" for="sample-precio-${indice}">${producto.precio}</label>
            </div>

        </span>                        
        <span class="mdl-list__item-primary-content w-20 ml-item">
            <!-- Colored FAB button with ripple -->
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick="borrarProd(${indice})">
                <i class="material-icons">remove_shopping_cart</i>
            </button>
        </span>

    </li>` // Alt + 96
    });

    componentHandler.upgradeElements(ul);
}


//REGISTRAR SERVICE WORKER



function registrarSW(){
//in devuelve tru si service esta dentro de navigator. Sirve para verificar si el navegador lo soporta.
//2) Registrar dicho worker en el archivo JS principal

if('serviceWorker' in navigator){
navigator.serviceWorker.register('../serviceWorker.js') //ruta relativa donde esta el archivo js
.then(registracion => {
console.log("SW registrado correctamente", registracion)

})
.catch(error=>console.log(error));
}
}






function inicio() {
//1. Agregar los listeners a los botones "entrada producto" y "borrar producto"
agregarListeners();
//2. Actualizar/Dibujar la lista
actualizarLista();
//3. Registrar el serviceWorker
registrarSW()
}

document.addEventListener('DOMContentLoaded', inicio);









