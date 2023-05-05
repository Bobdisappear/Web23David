

//Condicionales


const tengoSed = true;
const edad = 118

//Imprimir voy a beber si tengo sed

if(tengoSed){
    console.log("Pues vete a beber");    
}else{
    console.log("Tengo hambre");
};


if(edad >= 18){
    console.log("Carnet de coche");    
}else if( edad >=16){
    console.log("Carnet de moto");
}else {
    console.log("No hay carnet");
};



// Ejercicio
// Pedir con un prompt la nota de un examen y que imprima en consola el valor en texto de la nota
// Avisar con un alert si no es un numero
// No puede haber notas negativas y tampoco > 10





// Investigacion, convertir el if else anterior a la estructura
// Switch case


const nota = prompt('Escribe aquí tu nota');

if (nota <= 0){
    alert("No puedes tener numeros negativos");
}else if(nota >= 11){
    alert("Mas de un 10? Imposible");
}
else if(isNaN(nota)){
    alert("No es un numero!");
}else {
    console.log(nota);
}






console.log();
console.log(nota);