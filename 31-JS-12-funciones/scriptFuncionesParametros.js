
//Funciones como parametros

function suma(a,b){
    return a+b
}
function resta(a,b){
    return a-b
}

function ejecutarOperacion(n1,n2, funcionCallback){
    const resultado = funcionCallback(n1,n2);
    return resultado
}

console.log(ejecutarOperacion(3,4,suma));
console.log(ejecutarOperacion(3,4,resta));
console.log(ejecutarOperacion(3,4,function(p1,p2){
    return p1*p2
}));

console.log(ejecutarOperacion(3,4,(p1,p2) => p1*p2
));
