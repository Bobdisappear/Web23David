
const nom1 =prompt("nombre 1");
const nom2 =prompt("nombre 2");
const nom3 =prompt("nombre 3");

if (nom1 > nom2 || nom1 > nom3){
    document.write(nom1);
}else if (nom2 > nom1 || nom2 > nom3){
    document.write(nom2);
}else 
    document.write(nom3)