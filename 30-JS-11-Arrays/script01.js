

//Arrays

const numbers = [10, 20, 30, 40, 50];


//Otra forma de crearla
const meses = new Array('Enero',"Febrero");

//Los items de un Array pueden ser cualquier tipo de datoy los podemos mezclar

const deTodo = ['Hola', 10, true, null, {nombre:'Mario', trabajo:'Fontanero'}];

console.log(deTodo);

deTodo[0]; //Sacas Hola
deTodo[4]; //Sacar el objeto 
// deTodo[4] {'trabajo'}; //Sacar el trabajo del objeto (Preguntar sintaxis


const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' ]

console.log(meses1);
//Recorrer un array con un for

for(let i = 0; i < meses1.length; i++){
    console.log(meses1[i]);
}

//Acceder y modificar un item del array

meses1 [0] = 'Enero Mola';
console.log(meses1);

