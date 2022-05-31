//FUNCIONES PARA MOSTRAR INFORMACION EN PAGINAS
//Cantidad de itemCompra en carro
function cantItemCarro () {
    const cantItemAregado= document.getElementsByClassName ("cantItem")
    let index=0
    for (let cant of cantItemAregado) {
        cant.innerText = itemsCompra.length
        index++
    }
}

function mostrarItemsDestacados ()
{
    const nodoDivCarrito= document.getElementById ("itemsDestacados")
    let nodoUL= document.querySelector ("#listaItemsDestacados")
    if (!nodoUL) {
        nodoUL= document.createElement ("ul")
        nodoUL.setAttribute ("id", "listaItemsDestacados")
        nodoUL.className="general__subdiv1"
    }
    nodoUL.innerHTML=""

    libros.forEach((item) => {
        const nodoLI= document.createElement ("li") //la variable nodoLI solo existe dentro del for
        nodoLI.className="general__subdiv1__item1"

        const nodoImagen= document.createElement ("img")
        nodoImagen.className="general__subdiv1__item1__img"
        nodoImagen.src=`${item.urlImagen}`
        nodoLI.appendChild (nodoImagen)

        const nodoPrecio= document.createElement ("p")
        nodoPrecio.className=""
        nodoPrecio.innerHTML= `$${item.precio}`
        nodoLI.appendChild (nodoPrecio)

        const nodoBoton= document.createElement ("button")
        nodoBoton.className=""
        nodoBoton.id=`${item.id}`
        nodoBoton.dataset.item = `${item.id}`
        nodoBoton.addEventListener('click', agregarItem)
        nodoBoton.innerHTML= `Agregar`
        nodoLI.appendChild (nodoBoton)
 
        nodoUL.appendChild (nodoLI)
    });

    nodoDivCarrito.appendChild (nodoUL)

    const nodoEspacio= document.createElement ("br")
    nodoDivCarrito.appendChild (nodoEspacio)
}

//Funcion mostrarItemsCarrito
function mostrarItemsCarrito ()
{
    const nodoDivCarrito= document.getElementById ("itemsCarrito")
    let nodoUL= document.querySelector ("#listaItemsCarrito")
    if (!nodoUL) {
        nodoUL= document.createElement ("ul")
        nodoUL.setAttribute ("id", "listaItemsCarrito")
        nodoUL.className="general__subdiv2"
    }
    nodoUL.innerHTML=""

    itemsCompra.forEach((item) => {
        const nodoLI= document.createElement ("li") //la variable nodoLI solo existe dentro del for
        nodoLI.className="general__subdiv2__item2"

        const nodoNombre= document.createElement ("p")
        nodoNombre.className="general__subdiv2__item2__nombre"
        nodoNombre.innerHTML= `${item.nombre}`
        nodoLI.appendChild (nodoNombre)

        const nodoCantidad= document.createElement ("p")
        nodoCantidad.className="general__subdiv2__item2__cantidad"
        nodoCantidad.innerHTML= `${item.cantidad} libros`
        nodoLI.appendChild (nodoCantidad)

        const nodoCosto= document.createElement ("p")
        nodoCosto.className="general__subdiv2__item2__costo"
        nodoCosto.innerHTML= `$${item.costo}`
        nodoLI.appendChild (nodoCosto)

        const nodoBoton= document.createElement ("button")
        nodoBoton.className="general__subdiv2__item2__boton"
        nodoBoton.id=`${item.id}`
        nodoBoton.dataset.item = `${item.id}`
        nodoBoton.addEventListener('click', quitarItem)
        nodoBoton.innerHTML= `Eliminar`
        nodoLI.appendChild (nodoBoton)
 
        nodoUL.appendChild (nodoLI)
    });
    const nodoLI= document.createElement ("li")
    nodoLI.className="general__subdiv2__item2"

    const nodoTotal= document.createElement ("p")
    nodoTotal.className="general__subdiv2__item2__total"
    nodoTotal.innerHTML= `TOTAL $${calcularCostoTotal (itemsCompra)}`
    nodoLI.appendChild (nodoTotal)

    nodoUL.appendChild (nodoLI)

    nodoDivCarrito.appendChild (nodoUL)
}

//FUNCIONES DISPARADAS POR EVENTOS
//Funciones relacionadas a Agregar item
function agregarItem (evento){
    const id = evento.target.dataset.item
    let itemEncontrado= libros.find ((item)=>item.id==id)
    let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
    let costoParcialItem = calcularCostoItem(itemEncontrado.precio, cantidadItemCompra)
    //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
    arrayItemCompra (itemEncontrado.nombre, itemEncontrado.precio, cantidadItemCompra, costoParcialItem),
    cantItemCarro ()
    mostrarItemsCarrito ()
}

function calcularCostoItem (precioItem, cantidadItem) {
    return precioItem * cantidadItem 
}

function calcularCostoTotal (arrayItemCompra) {
    let array= arrayItemCompra
    let total=0
    for (let i=0; i<array.length; i++) 
    {
        total=total+(array[i].precio*array[i].cantidad)
    }
    return total
}


function cantidadItem (cantidadDisponible) {//(no esta en uso por el momento)
    const cantidadElegida = Number(prompt(`Indique la cantidad del libro seleccionado`))
    const stock = cantidadDisponible - cantidadElegida
    if (cantidadDisponible === 0) {
        alert("No hay disponibilidad de este item. Elija otra opcion");
        return false
    } else if (stock < 0) {
        alert("Hay solo " + cantidadDisponible + " item/s disponible/s. Vuelva a intentar");
        return false
    } else {
        return cantidadElegida
    }
}

//Funciones relacionadas a quitar items de carrito
function quitarItem (evento){
    const id = evento.target.dataset.item
    let itemEncontrado= itemsCompra.find ((itemCompra)=>itemCompra.id==id)
    let index= itemsCompra.indexOf (itemEncontrado)
    itemsCompra.splice (index,1)
    console.log ("DETALLE LIBROS EN CARRITO")
    itemsCompra.forEach ((itemCompra)=>console.log (itemCompra))
    cantItemCarro ()
    mostrarItemsCarrito ()

}

//Funcion relacionada a Buscar item (no esta en uso)
function buscarItem() {
    let busqueda = prompt("Ingrese el nombre del libro a buscar")
    let resulBusqueda = libros.filter((parametro) => parametro.nombre.toLowerCase().includes(busqueda))
    console.log("RESULTADO BUSQUEDA")
    resulBusqueda.forEach ((resultado)=>console.log (resultado.nombre))
}

