

//.reokace, .slice y .repeat

const producto = "monitor de 20 pulgadas";

console.log(producto.replace("20"), "24");

// Extraer solo una parte de la cadena o substring

console.log(producto.slice(11,13));
console.log(producto.slice(13,4)); //No corta hacia atras

// Substring hace algo parecido

console.log(producto.substring(0,3));
console.log(producto.substring(3,0)); //Si corta hacia atrás


const nombre = "Gerardo"
console.log(nombre.slice(0,1));
console.log(nombre.charAt(0));


// Repetir cadena

const texto ="  En Promoción ".trim().repeat(3);
console.log(texto);

//Split

const portero = "Hay una señora rubia en la puerta con rizos";
console.log(portero.split(" "));

const hobbies = "Leer, caminar, escuchar, musica, escribir, aprender"
console.log(hobbies.split(", "));



