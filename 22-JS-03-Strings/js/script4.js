

// const num = Math.floor(Math.random() * 7);

// console.log(num);




// // Ex Xor

// function xor (a,b){
//     let dif = a || b && b;
//     let equ = !(a && b);
    
//  return dif && equ
//  }

// // Two returns

// function repdigit(n) {
//     let ones = n % 10;
//     let tens = Math.floor(n / 10);
//     if (ones === tens) {
//       return 'Repdigit!';
//     }
//     return 'No Repdigit!';
//   }

// // Calcular recargo

// function addWithSurcharge(a, b) {

//     let surcharge = 0;
  
//     if (a <= 10) {
//       surcharge = surcharge + 1;
//     } else {
//       surcharge = surcharge + 2;
//     }
  
//     if (b <= 10) {
//       surcharge = surcharge + 1;
//     } else {
//       surcharge = surcharge + 2;
//     }
  
//     return a + b + surcharge;
//   }

//   function add (a){
//     let nuevo = b;
//    if (b !==a){
//        b.push()
//    }
//    return nuevo
//    }
   
//    function add (a, b){
//     let c = 0
//     if (c !==a && c !== b){
//         push(c)
//     }
//     return (a, b)
//     }
    

//     function concatUp(a,b){
//         let a1 = a
//         let b1 = b
//          if(b1>a1) {
//          b1.concat(a1)
//         }else {
//          a1.concat(b1)
//         }
//         return (a1,b1)
//         }



// Busca la mitad del array siendo este impar (ejercicio array:slice() jshero)
function halve(n){

    return n.slice (0, Math.round(n.length/2) )
    }