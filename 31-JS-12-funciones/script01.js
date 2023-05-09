
//Funciones 
saludar();
//Declaración de la función (Se puede invocar antes de su declaración)
function saludar(){
    document.write('<h1>Hola Caracola</h1>');
}

//Se llama a la función
saludar();
saludar();


//con parametros  
function saludar2(p1 ,p2 = 'hola '){
    const nombre = p1;
    document.write('<h1>' +  p2 + nombre + '</h1>'); //nombre en estos dos es un parametro (no tiene nada que ver con la variable)
}
const nombre = prompt('Te saludare')

saludar2(nombre, 'Hasta luego ');
saludar2('Julio');

//Desde dentro de una funcion puedo acceder a variables fuera pero no al revés

//Valor de retorno
function suma(n1, n2){
    if(isNaN(parseFloat(n1))){
        return;
    }
    const res = n1 + n2 ;
    return res;
}

console.log(suma(4,6));

