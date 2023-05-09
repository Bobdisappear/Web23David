
// Objetos (Todos son objetos en JS)

const name = "monitor 20 "
const price = 300
const avaliable = true

// Podemos usar objetos para agrupar la información en una sola variable

const product = {
//Se conoce como objeto literal
//Tienen propiedades:
    name: "monitor 40 pulgadas", 
    price: 200,
    avaliable: false,

};

console.log(name);

//Acceder a propiedades de un objeto

console.log(product.name);
console.log(product.price);

//Otra forma de acceder a las propiedades 

console.log(product['name']);

// Podemos modificar el valor de la propiedades

product.price = 90;

console.log(product.price);


// Podemos crear propiedades nuevas

product.imagen = "imagen.jpg"

//Como eliminarla (nahh)

delete product.name 
// Elimina name y no solo de la ultina asignación, si no de todos