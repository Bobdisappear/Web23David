
// //Funciones 
// saludar();
// //Declaración de la función (Se puede invocar antes de su declaración)
// function saludar(){
//     document.write('<h1>Hola Caracola</h1>');
// }

// //Se llama a la función
// saludar();
// saludar();


// //con parametros  
// function saludar2(p1 ,p2 = 'hola '){
//     const nombre = p1;
//     document.write('<h1>' +  p2 + nombre + '</h1>'); //nombre en estos dos es un parametro (no tiene nada que ver con la variable)
// }
// const nombre = prompt('Te saludare')

// saludar2(nombre, 'Hasta luego ');
// saludar2('Julio');

// //Desde dentro de una funcion puedo acceder a variables fuera pero no al revés

// //Valor de retorno
// function suma(n1, n2){
//     if(isNaN(parseFloat(n1))){
//         return;
//     }
//     const res = n1 + n2 ;
//     return res;
// }

// console.log(suma(4,6));

// function length (){
//     let length = 'David';
//    let charNumber = length.length;
//    return charNumber
   
//    }

  alert(prompt('Holi')) 



  //Quique no habló de tomates

  function shortcut(phrase1, phrase2){

    let str1 = phrase1.charAt(0);
    let str2 = phrase2.charAt(0);
    
    
    return str1 + str2
    }


function nam(n){
  const nam = 0;
  return nam
}