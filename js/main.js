// APP PARA COMPRAR LIBROS
// Se podra: 
// Buscar un libro
// Agregar libros al carrito y su cantidad.
// Quitar libros del carrito.

//FUNCIONES Y ARRAY PARA GUARDAR INFORMACION
//Funciones y array destinados a guardar los libros a mostrar en index
const libros = [] 
cargarLibros ()
function cargarLibros () {
    data.forEach ((dato)=>{
        const libro = new ItemDisponible (dato.id, dato.nombre, dato.precio, dato.cantidad, dato.genero, dato.imagen)
        libros.push (libro)
    })
}

//Funciones y array destinados a guardar los items de la compra
let itemsCompra = []

if(localStorage.getItem("Item__Compra"))
{
    itemsCompra = JSON.parse(localStorage.getItem("Item__Compra"));
}
else
{
    itemsCompra = []
}


function arrayItemCompra (nombre, precio, cantidad, costo, urlImagen)
{      
    let id=1;
    if (itemsCompra.length>0)
    {
       id=itemsCompra[itemsCompra.length-1].id+1;
    }
    let itemCompra = new ItemCompra (id, nombre, precio, cantidad, costo, urlImagen);
    itemsCompra.push(itemCompra); //agrega el item ingresado al array
    localStorage.setItem ('Item__Compra', JSON.stringify(itemsCompra)) //agrega el array en el local storage
}


//FUNCIONES PARA MOSTRAR INFORMACION EN PAGINAS
//Funcion para mostrar libros en index
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
        nodoImagen.src=`${item.imagen}`
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

//Funcion para mostrar la seccion de items del carrito. 
function mostrarItemsCarrito ()
{
    const nodoDivCarrito2= document.getElementById ("itemsCarrito")
    let nodoUL= document.querySelector ("#listaItemsCarrito")
    if (!nodoUL) {
        nodoUL= document.createElement ("ul")
        nodoUL.setAttribute ("id", "listaItemsCarrito")
        nodoUL.className="general__subdiv2"
    }
    nodoUL.innerHTML=""

    itemsCompra.forEach((item) => {
        const nodoLI= document.createElement ("li") 
        nodoLI.className="general__subdiv2__item2"

        const nodoImagen= document.createElement ("img")
        nodoImagen.className="general__subdiv2__item2__img"
        nodoImagen.src=`${item.urlImagen}`
        nodoLI.appendChild (nodoImagen)

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

    nodoDivCarrito2.appendChild (nodoUL)
}

//Función para mostrar el costo total de los items en carrito. Es llamada por la funcion mostrarItemsCarrito
function calcularCostoTotal (arrayItemCompra) {
    let array= arrayItemCompra
    let total=0
    for (let i=0; i<array.length; i++) 
    {
        total=total+(array[i].precio*array[i].cantidad)
    }
    return total
}

//Función para mostrar la cantidad de items de la compra sobre el carrito en el header
function cantItemCarro () {
    const cantItemAregado= document.getElementsByClassName ("cantItem")
    let index=0
    for (let cant of cantItemAregado) {
        cant.innerText = itemsCompra.length
        index++
    }
}



//FUNCIONES DISPARADAS POR EVENTOS O DE SOPORTE A ESTAS
//Funcion para agregar item en el array de compras
function agregarItem (evento){
    const id = evento.target.dataset.item
    let itemEncontrado= libros.find ((item)=>item.id==id)
    let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
    let costoParcialItem = calcularCostoItem(itemEncontrado.precio, cantidadItemCompra)
    //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
    arrayItemCompra (itemEncontrado.nombre, itemEncontrado.precio, cantidadItemCompra, costoParcialItem,itemEncontrado.imagen)
    cantItemCarro ()
    mostrarItemsCarrito ()
}

//Funcion que calcula el costo por item. Es llamada por funcion agregar item 
function calcularCostoItem (precioItem, cantidadItem) {
    return precioItem * cantidadItem 
}

//Funcion que verifica la cantidad del libros disponibles (no esta en uso por el momento)
function cantidadItem (cantidadDisponible) {
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

//Funcion para quitar items del array de compra
function quitarItem (evento){
    const id = evento.target.dataset.item
    let itemEncontrado= itemsCompra.find ((itemCompra)=>itemCompra.id==id)
    let index= itemsCompra.indexOf (itemEncontrado)
    itemsCompra.splice (index,1)
    localStorage.setItem ('Item__Compra', JSON.stringify(itemsCompra))
    cantItemCarro ()
    mostrarItemsCarrito ()
    console.log ("DETALLE LIBROS EN CARRITO")
    itemsCompra.forEach ((itemCompra)=>console.log (itemCompra))
}

//Funcion relacionada a Buscar item (no esta en uso)
function buscarItem() {
    let busqueda = prompt("Ingrese el nombre del libro a buscar")
    let resulBusqueda = libros.filter((parametro) => parametro.nombre.toLowerCase().includes(busqueda))
    console.log("RESULTADO BUSQUEDA")
    resulBusqueda.forEach ((resultado)=>console.log (resultado.nombre))
}


































