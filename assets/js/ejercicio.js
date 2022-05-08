//Declaro variables globales
let costoTotal = 0;
const costo1 = 1000;
const costo2 = 2000;
const costo3 = 500;
const costo4 = 3000;
const nombre1 = "El día que Nieztsche lloró";
const nombre2 = "El tercer ojo";
const nombre3 = "El sari rojo";
const nombre4 = "Los tres nombres del lobo";


//Declaro funciones a utilizar
function verMenu() {
    return Number(prompt(`Agregue un item a la compra:
                1-El día que Nieztsche lloró ($1000) 
                2-El tercer ojo ($2000)
                3-El sari rojo ($500)
                4-Los tres nombres del lobo ($3000)
                5-Finalizar compra
                6-Cancelar compra`));
}
function calcularCosto(costoAcumulado, costoIndividual, nombreItem) {
    let cantidad = Number(prompt(`Indique la cantidad del libro seleccionado`))
    costoAcumulado = costoAcumulado + (costoIndividual * cantidad)
    console.log("Acabas de agregar a la compra ", cantidad, "libro/s ", nombreItem)
    console.log("Costo acumulado: $", costoAcumulado)
    return costoAcumulado
}

//Inicio parte principal del programa
let item = verMenu();
while ((item !== 5) && (item !== 6)) {
    if (item === 1 || item === 2 || item === 3 || item === 4) {
        if (item === 1) {
            costoTotal = calcularCosto(costoTotal, costo1, nombre1)
        } else if (item === 2) {
            costoTotal = calcularCosto(costoTotal, costo2, nombre2)
        } else if (item === 3) {
            costoTotal = calcularCosto(costoTotal, costo3, nombre3)
        } else {
            costoTotal = calcularCosto(costoTotal, costo4, nombre4)
        }
    } else {
        alert("Opcion invalida. Debe seleccionar 1, 2, 3, 4, 5 o 6");
    }
    item = verMenu();
}
if (item === 5) {
    console.log("Costo final: $", costoTotal)
}
else {
    costoTotal=0
    console.log("Compra cancelada. Costo final: $", costoTotal)
}
console.log("Gracias por su interes")