//Crear una calculadora

const n1 = prompt('dime un numero')
const op = prompt('Que quieres hacer? (multiplicar,dividir, restar o sumar)')
const n2 = prompt('dime el segundo numero')
const imp = alert(`Este es el resultado ${resultado}`)
const resultado = n1 + op + n2

const calculadora = {
    multiplicar: function(n1, op, n2){
        return resultado = n1 + op + n2
    },
    dividir: function(n1, op, n2){
        return resultado = n1 + op + n2
    },
    restar: function(n1, op, n2){
        return resultado = n1 + op + n2
    },

    sumar: function (n1, op, n2){
        return resultado = n1 + op + n2
    }
}


// function myFunction() {
//     var x,y,z,oper;
//     x=prompt("Type first number");
//     y=prompt("Type second number");
//     oper=prompt("Type an operator");
    
//     if(oper=="+"){
//       z=Number(x)+Number(y);
//     }
//     else if(oper=!null){
//       z="Error"
//     }
//     else if(x=!null){
//       z="Error"
//     }
//     else if(y=!null){
//       z="Error"
//     }
//     else if(oper=="/"){
//       z=Number(x)/Number(y);
//     }
//     else if(oper=="*"){
//       z=Number(x)*Number(y);
//     }
//     else if(oper=="-"){
//       z=Number(x)-Number(y);
//     }
    
//     return z;
//       }

// document.write(z)


// Explicacion funcion JavasCript Hero



// A function is a block of statements that can be executed as often as you like. A function can have parameters and can return a value. Functions can be defined in different ways. Perhaps the most common one is the function declaration. It starts with the keyword function. It follows:
// the name of the function,
// the parameters enclosed in round parentheses,
// the statements enclosed in curly brackets.
// With the keyword return a value can be returned. At the same time return terminates the function. Statements after a return will not be executed. With
// function color() {
//   return 'red';
// }
// we define a function that returns the value 'red'. The function has no parameters (the parentheses are empty) and contains only the return statement. The function is assigned to the variable color. The function is called by its name:
// let result = color();
// Now the function is executed. Its return is assigned to the variable result. result therefore has the value 'red'.
  


// function double(name) {
//     return name + ' and ' + name;
//   }
  
//   let x = double('Roy');