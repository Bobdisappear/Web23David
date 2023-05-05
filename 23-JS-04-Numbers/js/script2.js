
//Objeto window, es parte del objeto global window

// window.Math
// window.CanvasPattern

let resultado;
//PI

resultado = Math.PI;

console.log(resultado);

//redondeo 

resultado =  Math.round(2.5);
console.log(resultado);

// redondeoal alza o baja
// resultado =  Math.floor(2.5); //alza
resultado =  Math.ceil(2.2); //baja

console.log(resultado);

//raiz cuadrada

res =  Math.sqrt(-2); //Error NaN (Not a Number)
console.log(res); 

//Valor absoluto

console.log(Math .abs(-8));

//Potencia

res = Math.pow(3, 8)
res = Math.min(2,5,9,7,1,2,8)
res = Math.max(2,5,9,7,1,2,8)

//Aleatorio
res = Math.random();
res = Math.round(Math.random() *30);

console.log(res);

//Operadores de incremento

let puntos = 5;
puntos = puntos +1;
puntos++;
++puntos;
puntos--;
--puntos;

puntos = puntos +22;
puntos += 22;

console.log("puntos: " + puntos);







 