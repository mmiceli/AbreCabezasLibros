//Declaro funciones a utilizar
function itemMenu() {
    return Number(prompt(`Agregue un item a la compra:
                1-El día que Nieztsche lloró ($1000, 10 libros) 
                2-El tercer ojo ($2000, 1 libro)
                3-El sari rojo ($500, 20 libros)
                4-Los tres nombres del lobo ($3000, 3 libros)
                5-Finalizar compra
                6-Cancelar compra`));
}

function cantidadMenu () {
    return Number(prompt(`Indique la cantidad del libro seleccionado`))
}

function calcularStock (cantidadElegida, cantidadDisponible) {
    let stock=cantidadDisponible-cantidadElegida
    if (cantidadDisponible===0) {
        alert("No hay disponibilidad de este item. Elija otra opcion");
        return true
    }
    else if (stock<0) {
        alert("Hay solo " +cantidadDisponible+" item/s disponible/s. Vuelva a intentar");
        return false
    }
    else {
        return stock
    }
}

function calcularCosto(precioItem, cantidadItem) {
    costo = precioItem * cantidadItem
    return costo
}

//Declaro variables globales
let costoTotal = 0;
const libros= [
    {id:1, nombre:"El día que Nieztsche lloró", precio:1000, cantidad:10}, 
    {id:2, nombre:"El sari rojo", precio:2000, cantidad:1},
    {id:3, nombre:"El tercer ojo", precio:500, cantidad:20},
    {id:4, nombre:"Los tres nombres del lobo", precio:3000, cantidad:3}
]
let cantidad = 0
let disponibilidad = 0
let item = itemMenu();

//Parte principal del programa
while ((item !== 5) && (item !== 6)) {
    if (item === 1 || item === 2 || item === 3 || item === 4) {
        cantidad = cantidadMenu ()
        disponibilidad= calcularStock (cantidad, libros[item-1].cantidad)
        if ((disponibilidad!==true)&&(disponibilidad!==false)) {
            costoTotal+= calcularCosto(libros[item-1].precio, cantidad)
            libros[item-1].cantidad= disponibilidad 
            console.log("Acabas de agregar a la compra ", cantidad, "libro/s ", libros[item-1].nombre,". Quedan disponibles", libros[item-1].cantidad, " unidades" )
            console.log("Costo acumulado: $", costoTotal)
        }
    } 
    else {
        alert("Opcion invalida. Debe seleccionar 1, 2, 3, 4, 5 o 6");
    }
    item = itemMenu();
}
if (item === 5) {
    console.log("Costo final: $", costoTotal)
}
else {
    costoTotal=0
    console.log("Compra cancelada. Costo final: $", costoTotal)
}
console.log("Gracias por su interes")