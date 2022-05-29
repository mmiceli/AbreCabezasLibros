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

//Funcion mostrarItemsCarrito
function mostrarItemsCarrito ()
{
    const nodoDivCarrito= document.getElementById ("itemsCarrito")
    //const nodoUL= document.querySelector ("mostrarItemsCarrito")
    //if (!nodoUL) {
        //nodoUL= document.createElement ("ul")
        //nodoUL.setAttribute ("id", "mostrarItemsCarrito")
    //}
    //nodoUL.innerHTML=""
    const nodoUL= document.createElement ("ul") //se pone el elemento a crear 
    itemsCompra.forEach((item) => {
        const nodoLI= document.createElement ("li") //la variable solo existe dentro del for
        nodoLI.innerHTML= `${item.nombre} - cantidad: ${item.cantidad} - costo parcial: $${item.costo}`
        nodoUL.appendChild (nodoLI)
    });
    nodoDivCarrito.appendChild (nodoUL)
}



//FUNCIONES DISPARADAS POR EVENTOS
//Funciones relacionadas a Agregar item
function agregarItem () {
    const item1= document.getElementById ("boton1")
    const item2= document.getElementById ("boton2")
    const item3= document.getElementById ("boton3")
    const item4= document.getElementById ("boton4")
    item1.onclick = ()=>{ 
        let nombreItemCompra= libros[0].nombre
        let precioItemCompra= libros[0].precio
        let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
        let costoParcialItem = calcularCosto(precioItemCompra, cantidadItemCompra)
        //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
        arrayItemCompra (nombreItemCompra, precioItemCompra, cantidadItemCompra, costoParcialItem),
        cantItemCarro ()
        mostrarItemsCarrito ()
    }
    item2.onclick = ()=>{ 
        let nombreItemCompra= libros[1].nombre
        let precioItemCompra= libros[1].precio
        let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
        let costoParcialItem = calcularCosto(precioItemCompra, cantidadItemCompra)
        //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
        arrayItemCompra (nombreItemCompra, precioItemCompra, cantidadItemCompra, costoParcialItem),
        cantItemCarro ()
        mostrarItemsCarrito ()
    }
    item3.onclick = ()=>{ 
        let nombreItemCompra= libros[2].nombre
        let precioItemCompra= libros[2].precio
        let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
        let costoParcialItem = calcularCosto(precioItemCompra, cantidadItemCompra)
        //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
        arrayItemCompra (nombreItemCompra, precioItemCompra, cantidadItemCompra, costoParcialItem),
        cantItemCarro ()
        mostrarItemsCarrito ()
    }
    item4.onclick = ()=>{ 
        let nombreItemCompra= libros[3].nombre
        let precioItemCompra= libros[3].precio
        let cantidadItemCompra= Number(prompt(`Indique la cantidad del libro seleccionado`))
        let costoParcialItem = calcularCosto(precioItemCompra, cantidadItemCompra)
        //cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
        arrayItemCompra (nombreItemCompra, precioItemCompra, cantidadItemCompra, costoParcialItem),
        cantItemCarro ()
        mostrarItemsCarrito ()
    }
}

function calcularCosto(precioItem, cantidadItem) {
    return precioItem * cantidadItem 
}

//Por el momento no se usa
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

