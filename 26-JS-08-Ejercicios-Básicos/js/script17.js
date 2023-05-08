let num = prompt("Escribe un número");
let i = 2;
while (num % i !== 0 && i < num / 2 ) {
i++;
}
if (num % i !== 0) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}