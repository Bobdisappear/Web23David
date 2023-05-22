
(function (){
const user = 'Pepe'
console.log(user);
})();

(function(nombre){
console.log('Hello ' + nombre);
})('Mundo')

function saludarMucho(nombre){
    alert (nombre)
    saludarMucho(nombre)
}
saludarMucho('javi')