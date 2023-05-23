
// <!-- 
// - print/log numeros del 1 al 100
// - para los multiplos de 3 imprimir "Fizz"
// - para los multiplis de 5 imprimir "Buzz"
// - para los numeros que son multiplos de 3 y 5 imprimir "FizzBuzz" -->





// let FizzBuzzComplete = ""

const num = []
for(let i = 0; i<=100 ; i++){ 
    num.push(i)
   if( i % 3 === 0 && i % 5 === 0){
    num[i] = "FizzBuzz";
   }else if(i % 5 === 0) {
    num[i] = "Buzz";
   }else if (i % 3 === 0){
    num[i] = "Fizz"
 
}
console.log(num[i]);
    // const FizzBuzz = i % 3 === 0 ? "Fizz" : ""
}

function runFizzBuzz(numero){
    const n = numero;
    let i = 1;
    while(i<=n){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if (i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
        i++;
    }
}
runFizzBuzz(100)

//Break and continue


for(let j = 0 ; j<=20 ; j++ ){
    if (j===15){
        console.log("Esta aqui");
        break
    }
    console.log(j);
}


//Continue



for(let j = 0 ; j<=20 ; j++ ){
    if (j===15){
        console.log("Este no lo quiero");
        continue
    }
    console.log(j);
}