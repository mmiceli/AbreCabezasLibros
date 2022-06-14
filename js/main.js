// APP PARA COMPRAR LIBROS
// Se podra: 
// Agregar items al carrito 
// Aumentar o disminuir la cantidad de un item hasta 1 en el carrito
// Buscar items por nombre y genero
// Quitar items del carrito.

//FUNCIONES Y ARRAY PARA GUARDAR INFORMACION
//Funciones y array destinados a guardar los libros a mostrar en index
const libros = []

cargarLibros()

function cargarLibros() {
    data.forEach((dato) => {
        const libro = new ItemDisponible(dato.id, dato.nombre, dato.precio, dato.cantidad, dato.genero, dato.imagen)
        libros.push(libro)
    })
}

//Funciones y array destinados a guardar los items de la compra. 
let itemsCompra = JSON.parse(localStorage.getItem("Item__Compra")) ? //Uso de operador Ternario
    JSON.parse(localStorage.getItem("Item__Compra")) : [];

function arrayItemCompra(nombre, precio, cantidad, imagen) {
    let id = 1;
    if (itemsCompra.length > 0) {
        id = itemsCompra[itemsCompra.length - 1].id + 1;
    }
    let itemCompra = new ItemCompra(id, nombre, precio, cantidad, imagen);
    itemsCompra.push(itemCompra); //agrega el item ingresado al array
    localStorage.setItem('Item__Compra', JSON.stringify(itemsCompra)) //agrega el array en el local storage
}


//FUNCIONES PARA MOSTRAR INFORMACION EN PAGINAS
//Funcion para mostrar libros en index
function mostrarItemsDestacados() {
    let nodoDivCarrito = document.getElementById("items")

    if (!nodoDivCarrito) {
        nodoDivCarrito = document.createElement("div")
        nodoDivCarrito.setAttribute("id", "items")
        nodoDivCarrito.className = "general"
    }
    nodoDivCarrito.innerHTML = ""

    const nodoH3 = document.createElement("h3")
    nodoH3.className = "general__titule"
    nodoH3.innerHTML = "Libros destacados"
    nodoDivCarrito.appendChild(nodoH3)


    const nodoUL = document.createElement("ul")
    nodoUL.className = "general__subdiv1"

    libros.forEach((item) => {
        const nodoLI = document.createElement("li")
        nodoLI.className = "general__subdiv1__item1"

        const nodoImagen = document.createElement("img")
        nodoImagen.className = "general__subdiv1__item1__img"
        nodoImagen.src = `${item.imagen}`
        nodoLI.appendChild(nodoImagen)

        const nodoPrecio = document.createElement("p")
        nodoPrecio.className = ""
        nodoPrecio.innerHTML = `$${item.precio}`
        nodoLI.appendChild(nodoPrecio)

        const nodoBoton = document.createElement("button")
        nodoBoton.className = ""
        nodoBoton.id = `${item.id}`
        nodoBoton.dataset.item = `${item.id}`
        nodoBoton.addEventListener('click', agregarItem)
        nodoBoton.innerHTML = `Agregar`
        nodoLI.appendChild(nodoBoton)

        nodoUL.appendChild(nodoLI)
    });

    nodoDivCarrito.appendChild(nodoUL)

    const nodoEspacio = document.createElement("br")
    nodoDivCarrito.appendChild(nodoEspacio)
}

//Funcion para mostrar la seccion de items del carrito. 
function mostrarCarrito () {
    itemsCompra.length > 0 && mostrarItemsCarrito() //Uso de operador And
    itemsCompra.length === 0 && mostrarCarritoVacio()
}
function mostrarItemsCarrito() {
    let nodoDivCarrito = document.getElementById("items")

    if (!nodoDivCarrito) {
        nodoDivCarrito = document.createElement("div")
        nodoDivCarrito.setAttribute("id", "items")
        nodoDivCarrito.className = "general"
    }
    nodoDivCarrito.innerHTML = ""

    const nodoH3 = document.createElement("h3")
    nodoH3.className = "general__titule"
    nodoH3.innerHTML = "Tu carrito"
    nodoDivCarrito.appendChild(nodoH3)

    const nodoUL = document.createElement("ul")
    nodoUL.className = "general__subdiv2"

    itemsCompra.forEach((item) => {
        const nodoLI = document.createElement("li")
        nodoLI.className = "general__subdiv2__item2"

        const nodoImagen = document.createElement("img")
        nodoImagen.className = "general__subdiv2__item2__img"
        nodoImagen.src = `${item.imagen}`
        nodoLI.appendChild(nodoImagen)

        const nodoNombre = document.createElement("p")
        nodoNombre.className = "general__subdiv2__item2__nombre"
        nodoNombre.innerHTML = `${item.nombre}`
        nodoLI.appendChild(nodoNombre)

        const nodoSpan = document.createElement("span")
        nodoSpan.className = "general__subdiv2__item2__cantidad"

        const nodoBoton1 = document.createElement("button")
        nodoBoton1.id = `${item.id}`
        nodoBoton1.dataset.item = `${item.id}`
        nodoBoton1.addEventListener('click', restarCantidadItem)
        nodoBoton1.innerHTML = `-`
        nodoSpan.appendChild(nodoBoton1)

        const nodoCantidad = document.createElement("p")
        nodoCantidad.className = "general__subdiv2__item2__cantidad__cantidad2"
        nodoCantidad.innerHTML = `${item.cantidad}`
        nodoSpan.appendChild(nodoCantidad)

        const nodoBoton2 = document.createElement("button")
        nodoBoton2.className = "general__subdiv2__item2__boton"
        nodoBoton2.id = `${item.id}`
        nodoBoton2.dataset.item = `${item.id}`
        nodoBoton2.addEventListener('click', sumarCantidadItem)
        nodoBoton2.innerHTML = `+`
        nodoSpan.appendChild(nodoBoton2)

        nodoLI.appendChild(nodoSpan)

        const nodoCosto = document.createElement("p")
        nodoCosto.className = "general__subdiv2__item2__costoPrecio"
        nodoCosto.innerHTML = `$${calcularCostoItem(item.precio, item.cantidad)}`
        nodoLI.appendChild(nodoCosto)

        const nodoBoton = document.createElement("button")
        nodoBoton.className = "general__subdiv2__item2__boton"
        nodoBoton.id = `${item.id}`
        nodoBoton.dataset.item = `${item.id}`
        nodoBoton.addEventListener('click', quitarItem)
        nodoBoton.innerHTML = `Eliminar`
        nodoLI.appendChild(nodoBoton)

        nodoUL.appendChild(nodoLI)
    });
    const nodoLI = document.createElement("li")
    nodoLI.className = "general__subdiv2__item2"

    const nodoTotal = document.createElement("p")
    nodoTotal.className = "general__subdiv2__item2__total"
    nodoTotal.innerHTML = `TOTAL $${calcularCostoTotal (itemsCompra)}`
    nodoLI.appendChild(nodoTotal)

    nodoUL.appendChild(nodoLI)

    nodoDivCarrito.appendChild(nodoUL)
}
function mostrarCarritoVacio() {
    let nodoDivCarrito = document.getElementById("items")

    if (!nodoDivCarrito) {
        nodoDivCarrito = document.createElement("div")
        nodoDivCarrito.setAttribute("id", "items")
        nodoDivCarrito.className = "general"
    }
    nodoDivCarrito.innerHTML = ""

    const nodoH3a = document.createElement("h3")
    nodoH3a.className = "general__texto"
    nodoH3a.innerHTML = "Tu carrito está vacío. Comenzá a llenarlo ahora."
    nodoDivCarrito.appendChild(nodoH3a)
}


//Función para mostrar el costo de cada items en carrito. Es llamada por la funcion mostrarItemsCarrito
function calcularCostoItem(precio, cantidad) {
    return precio * cantidad
}

//Función para mostrar el costo total de los items en carrito. Es llamada por la funcion mostrarItemsCarrito
function calcularCostoTotal(arrayItemCompra) {
    let array = arrayItemCompra
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += (array[i].precio * array[i].cantidad)
    }
    return total
}

//Función para mostrar la cantidad de items de la compra sobre el carrito en el header
function cantItemCarro() {
    const cantItemAregado = document.getElementsByClassName("cantItem")
    let index = 0
    for (let cant of cantItemAregado) {
        cant.innerText = itemsCompra.length
        index++
    }
}

//Funciones para mostrar los resultados de la Busqueda. 
function mostrarBusqueda() {
    let itemsEncontrado = JSON.parse(localStorage.getItem("Item__Encontrado")) ? //Uso de operador Ternario
        JSON.parse(localStorage.getItem("Item__Encontrado")) : [];

    itemsEncontrado.length > 0 && mostrarItemsEncontrados(itemsEncontrado) //Uso de operador And
    itemsEncontrado.length === 0 && mostrarNoEncontrado()
}
function mostrarItemsEncontrados(itemsEncontrado) {
    let nodoDivCarrito = document.getElementById("items")

    if (!nodoDivCarrito) {
        nodoDivCarrito = document.createElement("div")
        nodoDivCarrito.setAttribute("id", "items")
        nodoDivCarrito.className = "general"
    }
    nodoDivCarrito.innerHTML = ""

    const nodoH3 = document.createElement("h3")
    nodoH3.className = "general__titule"
    nodoH3.innerHTML = "Resultado de busqueda"
    nodoDivCarrito.appendChild(nodoH3)

    const nodoUL = document.createElement("ul")
    nodoUL.className = "general__subdiv2"

    itemsEncontrado.forEach((item) => {
        const nodoLI = document.createElement("li")
        nodoLI.className = "general__subdiv2__item2"

        const nodoImagen = document.createElement("img")
        nodoImagen.className = "general__subdiv2__item2__img"
        nodoImagen.src = `${item.imagen}`
        nodoLI.appendChild(nodoImagen)

        const nodoNombre = document.createElement("p")
        nodoNombre.className = "general__subdiv2__item2__nombre"
        nodoNombre.innerHTML = `${item.nombre}`
        nodoLI.appendChild(nodoNombre)

        const nodoPrecio = document.createElement("p")
        nodoPrecio.className = "general__subdiv2__item2__costoPrecio"
        nodoPrecio.innerHTML = `$${item.precio}`
        nodoLI.appendChild(nodoPrecio)

        const nodoGenero = document.createElement("p")
        nodoGenero.className = "general__subdiv2__item2__cantidad"
        nodoGenero.innerHTML = `${item.genero || "Genero no cargado"}` //Acceso condicional
        nodoLI.appendChild(nodoGenero)

        const nodoBoton = document.createElement("button")
        nodoBoton.className = "general__subdiv2__item2__boton"
        nodoBoton.id = `${item.id}`
        nodoBoton.dataset.item = `${item.id}`
        nodoBoton.addEventListener('click', agregarItem)
        nodoBoton.innerHTML = `Agregar`
        nodoLI.appendChild(nodoBoton)

        nodoUL.appendChild(nodoLI)
    });
    nodoDivCarrito.appendChild(nodoUL)
}
function mostrarNoEncontrado() {
    let nodoDivCarrito = document.getElementById("items")

    if (!nodoDivCarrito) {
        nodoDivCarrito = document.createElement("div")
        nodoDivCarrito.setAttribute("id", "items")
        nodoDivCarrito.className = "general"
    }
    nodoDivCarrito.innerHTML = ""

    const nodoH3 = document.createElement("h3")
    nodoH3.className = "general__texto"
    nodoH3.innerHTML = "No hay coincidencias con la busqueda"
    nodoDivCarrito.appendChild(nodoH3)
}

//FUNCIONES DISPARADAS POR EVENTOS O DE SOPORTE A ESTAS
//Funcion para agregar item en el carrito
function agregarItem(evento) {
    const id = evento.target.dataset.item
    let itemEncontrado = libros.find((item) => item.id == id)
    let cantidadItemCompra = 1
    arrayItemCompra(itemEncontrado.nombre, itemEncontrado.precio, cantidadItemCompra, itemEncontrado.imagen)
    cantItemCarro()
    Toastify({
        text: "Agregaste un item al carrito", 
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
           background: 'linear-gradient(to right, #f30c0c, #d6a63f)',
        },
     }).showToast();
}

//Funcion para aumentar la cantidad de un item
function sumarCantidadItem(evento) {
    const id = evento.target.dataset.item
    let itemEncontrado = itemsCompra.find((itemCompra) => itemCompra.id == id)
    let index = itemsCompra.indexOf(itemEncontrado)
    itemsCompra[index].cantidad++
    localStorage.setItem('Item__Compra', JSON.stringify(itemsCompra))
    mostrarCarrito()
}
//Funcion para disminuir la cantidad de un item
function restarCantidadItem(evento) {
    const id = evento.target.dataset.item
    let itemEncontrado = itemsCompra.find((itemCompra) => itemCompra.id == id)
    let index = itemsCompra.indexOf(itemEncontrado)
    if (itemsCompra[index].cantidad !== 1) {
        itemsCompra[index].cantidad--
        localStorage.setItem('Item__Compra', JSON.stringify(itemsCompra))
    }
    mostrarCarrito()

}

//Funcion para quitar items del carrito
function quitarItem(evento) {
    const id = evento.target.dataset.item
    let itemEncontrado = itemsCompra.find((itemCompra) => itemCompra.id == id)
    let index = itemsCompra.indexOf(itemEncontrado)
    itemsCompra.splice(index, 1)
    localStorage.setItem('Item__Compra', JSON.stringify(itemsCompra))
    cantItemCarro()
    mostrarCarrito()
    Toastify({
        text: "Eliminaste un item del carrito", 
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
           background: 'linear-gradient(to right, #f30c0c, #d6a63f)',
        },
     }).showToast();
}

//Funcion para a Buscar item
function buscarItem() {
    let itemBuscado = document.getElementById("itemBuscado")
    let buscar = document.getElementById("buscar")
    buscar.onclick = () => {
        let resulBusqueda = libros.filter((parametro) => parametro.nombre.toLowerCase().includes(itemBuscado.value) 
        || parametro.genero.toLowerCase().includes(itemBuscado.value))
        localStorage.setItem('Item__Encontrado', JSON.stringify(resulBusqueda))
        mostrarBusqueda()
    }
}

//Funcion para Ver el carrito
function verItemCarro() {
    let ver = document.getElementById("ver")
    ver.onclick = () => {
        mostrarCarrito()
    }
}