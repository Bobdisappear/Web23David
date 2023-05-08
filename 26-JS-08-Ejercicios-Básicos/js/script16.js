let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let menor;
let i;
if (n1 < n2) {
menor = n1;
} else {
menor = n2;
}
for (i=2; i < menor / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}