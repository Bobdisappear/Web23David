
const num =  prompt(" Dime un numero y te digo si es divisible por 2, 3, 5 o 7")

if (num % 2 === 0){
    document.write("Es divisible por 2")
}else  if (num % 3 === 0){
    document.write("Es divisible por 3")
}else if (num % 5 === 0){
    document.write("Es divisible por 5")
}else if (num % 7 === 0){
    document.write("Es divisible por 7")
}else
    document.write("No es divisible por estos numeros!")