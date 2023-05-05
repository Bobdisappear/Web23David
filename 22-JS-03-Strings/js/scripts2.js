

// Algunos metodos de los String

let producto = "Monitor 20 pulgadas";
let precio = "30 USD";

console.log(producto.length);

console.log(producto.indexOf(20));

console.log(producto.includes("Monitor"));

//Unir cadenas de texto -> Concatenar

console.log(producto.concat(" en descuento"))
console.log(producto.concat(" " + precio))

producto = "Teclado "
precio = " 200$"

console.log("El producto " + producto + "tiene un precio " + precio);

// Template Strings


console.log(`El producto ${producto}
             tiene un precio de ${precio}`);


            //  convertir el texto en a Mayuscula

console.log(producto.toUpperCase());

console.log(producto.trimStart());