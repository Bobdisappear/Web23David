
//Añadir y quitar elementos de un Array

const carrito = [];

const p1 = {
    nombre: 'Arroz',
    precio: 12
}

const p2 = {
    nombre:'Huevos',
    precio: 1
}
const p3 = {
    nombre: 'patatas',
    precio: 4
}

//Quiero añadir p1
// carrito[0] = p1

carrito.unshift(p3)
carrito.push(p1)
carrito.push(p2)
carrito.pop(p2)
carrito.push(p1)
carrito.push(p1)
carrito.shift()
carrito.unshift(p3)
carrito.push(p1)
carrito.push(p2)
carrito.shift()
carrito.push(p3)
carrito.splice(1, 0,p2)

console.log(carrito);


// push() – Inserta un elemento al final del arreglo.
// unshift() – Inserta un elemento al inicio del arreglo.
// pop() – Remueve un elemento del final del arreglo.
// shift() – Remueve un elemento del principio del arreglo.
// slice() – Crea una copia sombra del arreglo.