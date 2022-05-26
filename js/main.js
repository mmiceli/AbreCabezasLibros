// APP PARA COMPRAR LIBROS
// Los libros tendran id, nombre, precio, cantidad disponible. 
// Se podra: 
// Buscar un libro
// Agregar libros al carrito y su cantidad.
// Quitar libros del carrito.
// Comprar

//Declaracion de array de objetos de libros en stock
const libros = [{
        id: 1,
        nombre: "El día que Nieztsche lloró",
        precio: 1000,
        cantidad: 3
    },
    {
        id: 2,
        nombre: "El sari rojo",
        precio: 2000,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "El tercer ojo",
        precio: 500,
        cantidad: 20
    },
    {
        id: 4,
        nombre: "Los tres nombres del lobo",
        precio: 3000,
        cantidad: 15
    }
]


//Funciones y array destinados a guardar los item de la compra
class ItemCompra {
    constructor(id,nombre,precio,cantidad)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}

const itemsCompra = [];

function arrayItemCompra (nombre, precio, cantidad)
{      
    let id=1;
    if (itemsCompra.length>0)
    {
       id=itemsCompra[itemsCompra.length-1].id+1; //forma para incrementar automaticamente el id
    }
    let itemCompra = new ItemCompra (id, nombre, precio, cantidad);
    itemsCompra.push(itemCompra); //agrega el item ingresado al array
}

//Llama al menu principal
menuPrincipal ()


//Funciones menu principal
function opcionMenu() {
    return Number(prompt(`Seleccione una opcion:
                1. Buscar libro
                2. Agregar libro el carrito
                3. Quitar libro del carrito
                4. Salir`));
}

function menuPrincipal() {
    let opcion = opcionMenu();
    while (opcion !== 4) {
        switch (opcion) {
            case 1: {
                buscarItem();
                break;
            }
            case 2: {
                agregarItem ();
                break;
            }
            case 3: {
                quitarItem();
                break;
            }
            default: {
                alert("Opcion invalida. Debe seleccionar 1, 2, 3 o 4");
                break;
            }
        }
        opcion = opcionMenu()
    }
    console.log("Gracias por su interes")
}

//Funcion relacionada a Buscar item

function buscarItem() {
    let busqueda = prompt("Ingrese el nombre del libro a buscar")
    let resulBusqueda = libros.filter((parametro) => parametro.nombre.toLowerCase().includes(busqueda))
    console.log("RESULTADO BUSQUEDA")
    resulBusqueda.forEach ((resultado)=>console.log (resultado.nombre))
}

//Funciones relacionadas a Agregar item
function agregarItem () {
    let item= seleccionarItem();
    let nombreItemCompra=0
    let precioItemCompra= 0
    let cantidadItemCompra=0
    while (item !== 5)
    {
        if (item === 1 || item === 2 || item === 3 || item === 4) {
            cantidadItemCompra= cantidadItem (libros[item-1].cantidad)
            if (cantidadItemCompra!==false) {
                nombreItemCompra= libros[item-1].nombre
                precioItemCompra= libros[item-1].precio
                arrayItemCompra (nombreItemCompra, precioItemCompra, cantidadItemCompra)
                console.log("LIBRO AGREGADO EN CARRITO")
                console.log(nombreItemCompra)
                console.log("Cantidad:", cantidadItemCompra)
                console.log("Costo parcial item: $", calcularCosto(precioItemCompra, cantidadItemCompra))
            }
        }
        else {
            alert("Opcion invalida. Debe seleccionar 1, 2, 3, 4 o 5");
        }
        item = seleccionarItem();
    }
    console.log ("DETALLE LIBROS EN CARRITO")
    itemsCompra.forEach ((itemCompra)=>console.log (itemCompra))
}

function seleccionarItem() {
    return Number(prompt(`Agregue un libro a la compra:
                1-El día que Nieztsche lloró ($1000, 3 libros) 
                2-El sari rojo ($2000, 0 libro)
                3-El tercer ojo ($500, 20 libros)
                4-Los tres nombres del lobo ($3000, 15 libros)
                5-Salir`));
}


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

function calcularCosto(precioItem, cantidadItem) {
    return precioItem * cantidadItem 
}

//Funciones relacionadas a Quitar item
function quitarItem (){
    let id=Number(prompt("Ingrese el id del libro que quiere quitar del carrito"))
    let itemEncontrado= itemsCompra.find ((itemCompra)=>itemCompra.id===id)
    if (!itemEncontrado) {
        alert ("Libro no encontrado")
    }
    else {
        let index= itemsCompra.indexOf (itemEncontrado)
        itemsCompra.splice (index,1)
        console.log("LIBRO ELIMINADO DE CARRITO")
        console.log (itemEncontrado.nombre)
    }
    console.log ("DETALLE LIBROS EN CARRITO")
    itemsCompra.forEach ((itemCompra)=>console.log (itemCompra))
}

function totalItem () {

}

//Cantidad de itemCompra en carro
const cantItemAregado= document.getElementById ("cantItem")
cantItemAregado.innerText= itemsCompra.length





