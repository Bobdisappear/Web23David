
// <!-- 
// - print/log numeros del 1 al 100
// - para los multiplos de 3 imprimir "Fizz"
// - para los multiplis de 5 imprimir "Buzz"
// - para los numeros que son multiplos de 3 y 5 imprimir "FizzBuzz" -->





// let FizzBuzzComplete = ""

// const num = []
// for(let i = 0; i<=100 ; i++){ 
//     num.push(i)
//    if( i % 3 === 0 && i % 5 === 0){
//     num[i] = "FizzBuzz";
//    }else if(i % 5 === 0) {
//     num[i] = "Buzz";
//    }else if (i % 3 === 0){
//     num[i] = "Fizz"
 
// }
// console.log(num[i]);
//     // const FizzBuzz = i % 3 === 0 ? "Fizz" : ""
// }

// function runFizzBuzz(numero){
//     const n = numero;
//     let i = 1;
//     while(i<=n){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz");
//         }else if(i % 5 === 0){
//             console.log("Buzz");
//         }else if (i % 3 === 0){
//             console.log("Fizz");
//         }else{
//             console.log(i);
//         }
//         i++;
//     }
// }
// runFizzBuzz(100)

// //Break and continue


// for(let j = 0 ; j<=20 ; j++ ){
//     if (j===15){
//         console.log("Esta aqui");
//         break
//     }
//     console.log(j);
// }


// //Continue



// for(let j = 0 ; j<=20 ; j++ ){
//     if (j===15){
//         console.log("Este no lo quiero");
//         continue
//     }
//     console.log(j);
// }




// Los múltiplos de un número son los número resultado de multiplicar dicho número por la secuencia de números enteros.

// Así, los múltiplos del número 2 serían 2,4,6,8,10,12,… los múltiplos del 3 serían 3,6,9,12,15,…

// Para conocer si un número es múltiplo de otro, tendremos que ejecutar una división entre los dos y que el resto sea 0 (o que el cociente sea un número entero).

// En este caso, si queremos saber si 21 es múltiplo de 3, dividiremos uno entre otro viendo que el cociente es 7 (número entero) y el resto es 0. Por lo tanto podemos concluir que 21 es múltiplo de 3.

// Si queremos expresar esto mediante lenguaje Java podemos apoyarnos en el operador módulo (%), el cual nos devuelve el valor del resto de la división.

// int resto;
// int numero1 = 21;
// int numero2 = 3;

// resto = numero1%numero2;

// if (resto==0)
//   System.out.println(numero1 + " es múltiplo de " + numero2);
// else
//   System.out.println(numero1 + " NO es múltiplo de " + numero2);
// Este código Java lo podemos hacer más genérico si lo encapsulamos dentro de un método. El código sería el siguiente:


// public static boolean esMultiplo(int n1,int n2){
// 	if (n1%n2==0)
// 		return true;
// 	else
// 		return false;
// }
// Apoyándonos en este método podemos calcular todos los múltiplos de un número. Para ello bastará con recorrer desde el 1 hasta el número todos los valores, utilizando un bucle, y en cada iteracción llamaremos al método esMultiplo.

// Nos quedará el siguiente código…

// // Listar los multiplos de un número
// // Multiplos de 240
// int multiplo = 240;
// System.out.print("Los multiplos de " + multiplo + " son");
// for (int x=1;x<multiplo;x++){
// 	if (esMultiplo(multiplo,x)){
// 		System.out.print(" " + x);
// 	}
// }
// Este código no es el más óptimo, pero totalmente válido a fines didácticos.