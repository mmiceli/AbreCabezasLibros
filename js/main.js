// APP PARA COMPRAR LIBROS
// Los libros tendran id, nombre, precio, cantidad disponible. 
// Se podra: 
// Buscar un libro
// Agregar libros al carrito y su cantidad.
// Quitar libros del carrito.

//Declaracion de array de objetos de libros en stock
const libros = [{
        id: 1,
        nombre: "El día que Nieztsche lloró",
        precio: 1000,
        cantidad: 3,
        genero: "Novela",
        activoMenu: true
    },
    {
        id: 2,
        nombre: "El sari rojo",
        precio: 2000,
        cantidad: 0,
        genero: "Novela",
        activoMenu: true
    },
    {
        id: 3,
        nombre: "El tercer ojo",
        precio: 500,
        cantidad: 20,
        genero: "Novela",
        activoMenu: false
    },
    {
        id: 4,
        nombre: "Los tres nombres del lobo",
        precio: 3000,
        cantidad: 15,
        genero: "Novela",
        activoMenu: true
    },
    {
        id: 5,
        nombre: "bla bla bla",
        precio: 3000,
        cantidad: 15,
        genero: "Biografia",
        activoMenu: true
    },
    {
        id: 6,
        nombre: "bla bla",
        precio: 3000,
        cantidad: 15,
        genero: "Novela",
        activoMenu: false
    } 
]


//Funciones y array destinados a guardar los item de la compra

const itemsCompra = [];

function arrayItemCompra (nombre, precio, cantidad, costo)
{      
    let id=1;
    if (itemsCompra.length>0)
    {
       id=itemsCompra[itemsCompra.length-1].id+1; //forma para incrementar automaticamente el id
    }
    let itemCompra = new ItemCompra (id, nombre, precio, cantidad, costo);
    itemsCompra.push(itemCompra); //agrega el item ingresado al array
}

//mostrarNovelas(libros)
//menuPrincipal ()
agregarItem ()


//Funciones menu principal (no se usa)
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









