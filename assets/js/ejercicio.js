let costoTotal = 0;
const costoLibro1 = 1000;
const costoLibro2 = 2000;
const costoLibro3 = 500;
const costoLibro4 = 3000;

let a = Number(prompt(`Agregar un libro a la compra:
                1-El día que Nieztsche lloró ($1000) 
                2-El tercer ojo ($2000)
                3-El sari rojo ($500)
                4-Los tres nombres del lobo ($3000)
                5-Finalizar compra`));

while (a !== 5) {
    if (a === 1 || a === 2 || a === 3 || a === 4) {
        let cantidad = (prompt(`Indique la cantidad del libro seleccionado`));
        if (a === 1) {
            costoTotal = costoTotal + (costoLibro1 * cantidad)
        } else if (a === 2) {
            costoTotal = costoTotal + (costoLibro2 * cantidad)
        } else if (a === 3) {
            costoTotal = costoTotal + (costoLibro3 * cantidad)
        } else {
            costoTotal = costoTotal + (costoLibro4 * cantidad)
        }

        console.log("Costo parcial: $", costoTotal)

        a = Number(prompt(`Agregar otro libro a la compra:
                    1-El día que Nieztsche lloró ($1000) 
                    2-El tercer ojo ($2000)
                    3-El sari rojo ($500)
                    4-Los tres nombres del lobo ($3000)
                    5-Finalizar compra`));

    } else {
        alert("Opcion invalida. Debe seleccionar 1, 2, 3, 4 o 5");
        a = Number(prompt(`Agregar otro libro a la compra:
                    1-El día que Nieztsche lloró ($1000) 
                    2-El tercer ojo ($2000)
                    3-El sari rojo ($500)
                    4-Los tres nombres del lobo ($3000)
                    5-Finalizar compra`));
    }
}

console.log("Costo total: $", costoTotal)