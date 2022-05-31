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
        activoMenu: true,
        urlImagen:"assets/image/books/dia_nietzsche_lloro.jpg"
    },
    {
        id: 2,
        nombre: "El sari rojo",
        precio: 2000,
        cantidad: 0,
        genero: "Novela",
        activoMenu: true,
        urlImagen:"assets/image/books/sari_rojo.jpg"
    },
    {
        id: 3,
        nombre: "El tercer ojo",
        precio: 500,
        cantidad: 20,
        genero: "Novela",
        activoMenu: false,
        urlImagen:"assets/image/books/tercer_ojo.jpg"
    },
    {
        id: 4,
        nombre: "Los tres nombres del lobo",
        precio: 3000,
        cantidad: 15,
        genero: "Novela",
        activoMenu: true,
        urlImagen:"assets/image/books/tres_nombres_lobo.jpg"
    },
    /*{
        id: 5,
        nombre: "bla bla bla",
        precio: 3000,
        cantidad: 15,
        genero: "Biografia",
        activoMenu: true,
        urlImagen:"assets/image/books/tres_nombres_lobo.jpg"
    },
    {
        id: 6,
        nombre: "bla bla",
        precio: 3000,
        cantidad: 15,
        genero: "Novela",
        activoMenu: false,
        urlImagen:"assets/image/books/tres_nombres_lobo.jpg"
    }*/
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

mostrarItemsDestacados ()














