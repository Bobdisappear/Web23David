"Use Strict"
// Variables con var

var producto = "Monitor de 23'";

console.log(typeof producto);

producto = 'Patinete xiaomi';

console.log(producto);

// Tipado de datos dinamcos

producto = 1;
console.log(typeof producto);

producto = {precio: 234, modelo:'Samsung'};
console.log(typeof producto);

producto = [1,2,3,4];
console.log(typeof producto);

producto = true;
console.log(typeof producto);


// Normas de estilo para nombrar variables
var nombreProducto = "lo que sea";  //camelcase    
var nombreProducto = "otra cosa"; //Puedes redeclarar un nombre de variable (con let no)

// Recomendacion usar let y const

let precio = 12;

// let precio = 22 no puedo redefinir

const PI = 3.1416;
// PI = 4.5; // const dara error alno poder cambiar

const usuario = {nombre:"Pepe", edad: "23"};
console.log(usuario);
usuario.edad = 24;
console.log(usuario);







