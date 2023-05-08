
const num =  prompt(" Dime un numero y te digo por que numero es divisible")
let i ;
for (i=2;i < num/2; i++) {
    if (num % i === 0) {
    document.write(i,", ");
    }
    }
