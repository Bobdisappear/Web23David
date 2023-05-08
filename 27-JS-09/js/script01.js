

// operador ternario

const isRaining = true;
let action = isRaining ? "Me mojo" : "Estoy seco";

// ? equivale a if y : equivale a else

console.log(action);


// Condicional

// if(condicion){
//     if(otro){

//     }
// }if else(condicion2{
    
// }if else(otramas{

// }))


// Estructura Switchcase

const metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo': 
        console.log(`pagaste con ${metodoPago}`);
    break;
    
    case 'tarjeta': 
        console.log(`pagaste con ${metodoPago}, conectando...`);
    break;

    default:
        console.log();
        break;
}

// Operadores Booleanos

const user = false;
const canPay = true;

if(user && canPay){     //(user == true) es lo mismo
    console.log('Realizando tu pedido');
}else{
    console.log('Hubo un error con el pago');
}     


//Si queremos dar info mas concreta


if(user && canPay){

    console.log('Realizando tu pedido');
}else if (!user){    //! negaciçon al usuario
    console.log('Comprueba el usuario');
}else if(!canPay){
    console.log('No tienes pasta');
}else {
    console.log('Hubo un error');
}

// Ejemplo OR

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if(efectivo > totalCarrito || credito > totalCarrito){
    console.log('Puedes pagar con efectivo i credito');
}else if(disponible >= totalCarrito){
    console.log('Paga con ambos');
}else{
    console.log('Credito insuficiente');
}


// 