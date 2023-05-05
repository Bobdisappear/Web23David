
// Ejercicio
// Pedir con un prompt la nota de un examen y que imprima en consola el valor en texto de la nota
// Avisar con un alert si no es un numero
// No puede haber notas negativas y tampoco > 10

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